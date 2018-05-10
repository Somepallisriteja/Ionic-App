import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MyshiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myshifts',
  templateUrl: 'myshifts.html',
 
})
export class MyshiftsPage {
  users: any;
  userEmail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, private http:Http, private afAuth: AngularFireAuth) {
    
  }



  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
      console.log('A informacao de data ' , data);
      this.userEmail = data.email;
      console.log(this.userEmail);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyshiftsPage');
    this.getCurrentUser();
   
  }
  onload(){
    this.navCtrl.push(TabsPage)
  } 
  

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading open shifts'
    
      });
      loading.present();
      console.log('in loadjson',this.userEmail);
      //let email = "sritejamahadevan@gmail.com";
       let url = `https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users/search?email=${this.userEmail}`
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      this.http.get(url)
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        console.log(res)
        this.users = res;
      },
      
      (err) =>{
        
      alert("failed loading json data");
      });
    }
}
