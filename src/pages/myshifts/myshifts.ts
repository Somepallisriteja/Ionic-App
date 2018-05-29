import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
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
  public loadingCtrl: LoadingController, private http:Http,
  private afAuth: AngularFireAuth,
  private alertCtrl: AlertController) {
    
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
        content: 'Loading your shifts'
    
      });
      loading.present();
      console.log('in loadjson',this.userEmail);
      //let email = "sritejamahadevan@gmail.com";
       let url = `https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Planed/search?email=${this.userEmail}`
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      this.http.get(url)
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        console.log(res, 'in res')
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


    defaultMessage(){


    }
}
