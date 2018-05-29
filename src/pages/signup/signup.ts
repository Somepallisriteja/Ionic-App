import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private http: Http
            ){}
onSignup(form: NgForm){
  ///Posting signup page data to google sheets
  
     
     const loading = this.loadingCtrl.create({
    content: 'Signing you up'

  });
  loading.present();  
  
  this.authService.signup(form.value.email, form.value.password, )
  .then(data => {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
     headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users", JSON.stringify(form.value), options)
    .subscribe(data => {
      console.log(data);
    })
    loading.dismiss();
  })
  .catch(error=> {
    loading.dismiss();
    const alert = this.alertCtrl.create({
      title: 'Signup failed',
      message: error.message,
      buttons: ['Ok']
    });
    alert.present();
  });

 
}

}
