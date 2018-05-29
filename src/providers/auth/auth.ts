import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';


import { Observable} from 'rxjs/Observable';
import { switchMap, take, map} from 'rxjs/operators';

import {Facebook} from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
//import 'rxjs/add/operator/map';

//import { EmailAuthProvider } from '@firebase/auth-types';



@Injectable()
export class AuthProviders {

  user: Observable<any>;

  constructor(public http: HttpClient,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private facebook: Facebook,
              private platform: Platform

               ) {
    console.log('Hello AuthProvider Provider');

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {

        console.log(user)
        if(user) {
            return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }

      })

    )
  }


  //Current user as promise. Useful for one off operations

  /* getPresentUser(): Promise<any> {
    return this.user.pipe(take(1)).toPromise()
   return this.user.pipe(
      take(1),
      map(user => !!user)
    )
    .toPromise()
    
  }*/



 
async facebookLogin(){
  if (this.platform.is('cordova')){
    return await this.nativeFacebookLogin();
  } else {
       return await this.webFacebookLogin();
  }
}


private updateUserData(user: any){
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);


  const data = {
    uid: user.uid,
    email: user.email || null,
    displayName: user.displayName || 'nameless user',
    photoURL: user.photoURL || 'https://www.youtube.com/'

  };
  return userRef.set(data, {merge: true});
}

async nativeFacebookLogin(): Promise<any>{
  try{
    const response = await this.facebook.login(['email', 'public_profile']);
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    const firebaseUser = await firebase.auth().signInWithCredential(facebookCredential);
    return await this.updateUserData(firebaseUser)
  } catch(err){
    console.log(err)
  }

}
 
async webFacebookLogin(): Promise<void> {
  try{
    const Provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(Provider);
    return await this.updateUserData(credential.user);
  } catch(err){
    console.log(err)
  }
  
}

///Helpers

async logout(): Promise<any> {
  return this.afAuth.auth.signOut();
}
 

///Current user as boolean promise. Useful for route guards

getPresentUser(): Promise<any> {
 
  return this.user.pipe(
    take(1),
    map(user => !!user)
  )
  .toPromise()
  
}






}
