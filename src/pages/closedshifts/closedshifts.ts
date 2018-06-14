import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';




@IonicPage()
@Component({
  selector: 'page-closedshifts',
  templateUrl: 'closedshifts.html',
})
export class ClosedshiftsPage {

 
  userEmail:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              public http : Http,
              private alertCtrl: AlertController,
              private afAuth: AngularFireAuth
             ) {
  }

  ionViewDidLoad(){
    this.onloadJson();
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
      console.log('A informacao de data ' , data);
      this.userEmail = data.email;
      console.log(this.userEmail);
    });
  }

    /*Loading data from google sheets */
    users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading closed shifts'
    
      });
      loading.present();
      let url = `https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Closed/search?email=${this.userEmail}`
      
      this.http.get(url)
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
        subTitle: 'Currently you have no new shifts scheduled here:)',
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
