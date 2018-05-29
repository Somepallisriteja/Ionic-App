import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

import { AngularFireAuth } from 'angularfire2/auth';

//import { AngularFireList, AngularFireObject} from 'angularfire2/database';
//import { Profile } from '../../models/profile';
//import { AngularFireDatabase} from 'angularfire2/database';
//import { AngularFireList} from 'angularfire2/database';

//import { AuthProviders } from '../../providers/auth/auth';
//import { EditProfilePage } from '../edit-profile/edit-profile';
//import { Observable } from 'rxjs/Observable';







/*
import firebase from 'firebase';
declare let FCMPlugin;  */





@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})

export class ProfilePage {


 //profileData: FirebaseListObservable<Profile>
 //profileData: AngularFireList<Profile>

 //itemsRef: AngularFireList<Profile>;
 //profileData: Observable<Profile[]>;
 userEmail: any;
 displayname: any;
 password: any;
 

 


 /*firestore =  firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');  */
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public networkprovider: NetworkEngineProvider,
    private afAuth: AngularFireAuth,
   // private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    //public auth: AuthProviders
   /* private platform: Platform*/
  ) {
    //afDatabase.list<Profile>('items').valueChanges().subscribe(console.log);
   
    
  }


  /*ionViewCanEnter(){
    return this.auth.getPresentUser();
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getCurrentUser();
   
  }
 
ionViewWillLoad(){
 this.getCurrentUser();
 

 
  this.afAuth.authState.take(1).subscribe(data=> {

    console.log('A informatica', data );
    if(data && data.email && data.uid){
      this.toast.create({
        message: `Welcome to SignSpin Application, ${data.email}`,
        duration: 3000
      }).present();
      //this.itemsRef = this.afDatabase.list(`Profile/${data.uid}`);
      //this.profileData = this.itemsRef.valueChanges();
      //this.profileData.subscribe(res=> console.log(res));
      //this.profileData = this.afDatabase.object(`Profile/${data.uid}`).valueChanges();
      
      
    }
  })
}
getCurrentUser() {
  this.afAuth.authState.subscribe(data => {
    console.log('A informacao de data ' , data);
    this.userEmail = data.email;
    
   
   
  });
}  





  /*openEditPage(){
  this.navCtrl.push('EditProfilePage');
 }*/











 /* this.tokensetup().then((token) =>{
    this.storetoken(token);
  }); 
  this.onNotification();
  }


  async onNotification(){
   await this.platform.ready();
   FCMPlugin.onNotification((data)=>{
     console.log(data);
   }, (error)=> console.error(error));
  }
  catch(e){
    console.error(e);
  }
    /*ionViewDidLoad(){
    FCMPlugin.onNotification(function(data){
      if(data.wasTapped){
        //Notification was received on device tray and tapped by the user.
        alert( JSON.stringify(data) );
      }else{
        //Notification was received in foreground. Maybe the user needs to be notified.
        alert( JSON.stringify(data) );
      }
  });
  FCMPlugin.onTokenRefresh(function(token){
    alert( token );
});
  }
  tokensetup(){
    var promise = new promise((resolve, reject) =>{
      FCMPlugin.getToken(function(token){
        resolve(token);
    }, (err) =>{
      reject(err);
    });

    })
    return promise;
  }
  storetoken(t){
   this.afd.list(this.firestore).push({
     uid: firebase.auth().currentUser.uid,
     devtoken: t
   }). then(() =>{
     alert('Token stored');
   }).catch(()=>{
     alert('Token not stored');
   })

   this.afd.list(this.firemsg).push({
     sendername: firebase.auth().currentUser.displayName,
     message: 'Hello'
   }).then(()=>{
     alert('Message stored');
   }).catch(()=>{
     alert('Message not stored');
   })
  }  */



 
 

  






/*callPostService(name, city){
 let p = this.networkprovider.callPost(name, city)
 .then(data =>{
   console.log("recieved" + JSON.stringify(data.json().data));
 });
} */
}
