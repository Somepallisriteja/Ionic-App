import { Component } from '@angular/core';
import { AuthProviders } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
//import { TabsPage } from '../../pages/tabs/tabs';
import { ProfilePage } from '../../pages/profile/profile';


@Component({
  selector: 'facebook-login',
  templateUrl: 'facebook-login.html'
})
export class FacebookLoginComponent {

  

  constructor( public auth: AuthProviders,
               public navCtrl: NavController) {
   
  }

  async login(){
    await this.auth.facebookLogin();
    await this.navCtrl.setRoot(ProfilePage)
  }

}
