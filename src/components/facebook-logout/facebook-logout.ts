import { Component } from '@angular/core';
import { AuthProviders } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { LoginpagePage } from '../../pages/loginpage/loginpage';


@Component({
  selector: 'facebook-logout',
  templateUrl: 'facebook-logout.html'
})
export class FacebookLogoutComponent {

  text: string;

  constructor(public auth: AuthProviders,
              public navCtrl:NavController) {
    
  }

  async logout(){
    await this.auth.logout();
    await this.navCtrl.setRoot(LoginpagePage);
  }

}
