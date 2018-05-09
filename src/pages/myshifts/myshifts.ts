import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { userdetailService } from '../../services/userDetails';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController, private http:Http, private userdetails : userdetailService) {
      this.users = this.userdetails.getuser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyshiftsPage');
  }
  onload(){
    this.navCtrl.push(TabsPage)
  } 
  

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading open shifts'
    
      });
      loading.present();
      
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Planed/search?Kunde=JOKEEvents-Berlin-DS-SS")
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        
        this.users = res;
      },
      
      (err) =>{
        
      alert("failed loading json data");
      });
    }
}
