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
  //function to get the current user email 
  userEmail:any;
  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
    this.userEmail = data.email;
      
    });
  }

    //Loading data from google sheets with Sheetsu API with the help of current user email
    users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Wird geladen'
    
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
    // function for displaying an alert when there are no shifts
    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Aktuell hast du keine bevorstehenden Einsätze!',
        subTitle: 'Bewirb dich jetzt auf neue!',
        buttons: ['Zurück']
      });
      alert.present();
    }
}
