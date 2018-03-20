import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

declare var FCMPlugin;



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage {
  firestore =  firebase.database().ref('/pushtokens');
  firemsg = firebase.database().ref('/messages');
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public networkprovider: NetworkEngineProvider,
    public afd: AngularFireDatabase
  ) {
  this.tokensetup().then((token) =>{
    this.storetoken(token);
  });
  }
  ionViewDidLoad(){
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
  }

users: any;

loadJson(){
  this.http.get('https://sheetsu.com/apis/v1.0bu/0f1648314220')
  .map(res => res.json())
  .subscribe( res=>{
    this.users = res.Sheet1;
  },(err) =>{
  alert("failed loading json data");
  });
}
 
 
postRequest() {
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  let options = new RequestOptions({ headers: headers });

  let postParams = {
    Title: 'Spinning',
    Location: 'wittenberger'
    
  }
  
  this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(postParams), options)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);// Error getting the data
    });
}





/*callPostService(name, city){
 let p = this.networkprovider.callPost(name, city)
 .then(data =>{
   console.log("recieved" + JSON.stringify(data.json().data));
 });
} */
onAddItem(form: NgForm){
  console.log(form);
}

}
