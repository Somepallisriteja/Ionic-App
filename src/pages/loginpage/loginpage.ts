import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';



@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class LoginpagePage {
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginpagePage');
   

  }
// function for moving to Registration page
onclick(){
  this.navCtrl.push(SignupPage)
} 

// Registration the form details to firebase and google sheets
onSignin(form: NgForm){
  const loading= this.loadingCtrl.create({
    content:'Signing you in ...'
  });
  loading.present();
  this.authService.signin(form.value.email, form.value.password)
  .then( data =>
    {
      console.log(data.email);
    loading.dismiss();
  })
  .catch(error =>
    {
      loading.dismiss();
     const alert= this.alertCtrl.create({
       title:'Signin failed !!',
       message: error.message,
       buttons:['Ok']
       
     });
     alert.present();
    });
}  

}
