import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  Headers, RequestOptions } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-closedshifts',
  templateUrl: 'closedshifts.html',
})
export class ClosedshiftsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              public http : Http,
              private alertCtrl: AlertController
             ) {
  }

    /*Loading data from google sheets */
    users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading closed shifts'
    
      });
      loading.present();
      
      this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Closed")
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        
        this.users = res;
      },
      
      (err) =>{
     this.presentAlert();
     loading.dismiss();
        
        
      
      });
      
    }
    
    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Hi',
        subTitle: 'Currently you have no new shifts scheduled:)',
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
