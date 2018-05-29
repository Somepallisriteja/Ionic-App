import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import 'rxjs/add/operator/map';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { TabsPage } from '../tabs/tabs';





@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  dataToAdd;

  profile = {} as Profile


 /*firestore =  firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');  */
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    
    public networkprovider: NetworkEngineProvider,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
   /* private platform: Platform
    public afd: AngularFireDatabase*/
  ) {
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
}


 
 

  






/*callPostService(name, city){
 let p = this.networkprovider.callPost(name, city)
 .then(data =>{
   console.log("recieved" + JSON.stringify(data.json().data));
 });
} 
*/


createProfile(){

  
 this.afAuth.authState.take(1).subscribe(auth => {
   this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
   .then(()=> this.navCtrl.setRoot(TabsPage));
   
   
  }) 
  

}


}
