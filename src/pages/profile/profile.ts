import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { AngularFireAuth } from 'angularfire2/auth';



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



 userEmail: any;
 
 


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {
   
   
    
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getCurrentUser();
   
  }
 
ionViewWillLoad(){
 this.getCurrentUser();
 

 
  this.afAuth.authState.take(1).subscribe(data=> {

    
    if(data && data.email && data.uid){
      this.toast.create({
        message: ` Willkommen in der SignSpin App!, ${data.email}`,
        duration: 3000
      }).present();
      
      
      
    }
  })
}
getCurrentUser() {
  this.afAuth.authState.subscribe(data => { 

    this.userEmail = data.email;
  });
}  





 











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
