import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage {
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public networkprovider: NetworkEngineProvider
  ) {

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
