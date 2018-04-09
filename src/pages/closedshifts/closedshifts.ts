import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ClosedshiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-closedshifts',
  templateUrl: 'closedshifts.html',
})
export class ClosedshiftsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              public http : Http) {
  }

    /*Loading data from google sheets */
    users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading closed shifts'
    
      });
      loading.present();
      
      this.http.get('https://script.googleusercontent.com/macros/echo?user_content_key=XL3g08RkWYkQ1B9kxtNlOLB1wnFvpNxl1r202tlxGiyIuJhQ_dHrv0xVI2S6f3-NZLOuxajKpQOuFwPyHJRFXJuOMOzz5PENOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp4atKAj0sgjCvhWP5O4WMx-NWhTsU3rluYA_JeiQrwFcjbcj5Ekwq4b7ezrIEivWH_6EBs4LibZVeQl72CFk5TU&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx')
      .map(res => res.json())
      .subscribe( res=>{
        loading.dismiss();
        this.users = res.Service;
      },
      (err) =>{
        
      alert("failed loading json data");
      });
      
    }

}
