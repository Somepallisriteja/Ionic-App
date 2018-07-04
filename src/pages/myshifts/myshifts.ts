import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';



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

// getting the current user email from the firebase

  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
    this.userEmail = data.email;
      
    });
  }
// loading the content from google sheets
  ionViewDidLoad() {
    this.getCurrentUser();
    this.onloadJson();
      
  }

  // getting content from google sheets with the help of user email

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Wird geladen'
    
      });
      loading.present();
      console.log('in loadjson',this.userEmail);
     
      
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
        title: 'Du hast aktuell keine bevorstehenden Einsätze',
        subTitle: 'Bewirb dich jetzt auf verfügbare Einsätze!',
        buttons: ['Zurück'] 
      });
      alert.present();
    }


    defaultMessage(){


    }
}
