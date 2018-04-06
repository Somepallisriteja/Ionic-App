import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { MyshiftsPage } from '../pages/myshifts/myshifts';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
import { FcmProvider } from '../providers/fcm/fcm';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginpagePage;
  MyshiftsPage = MyshiftsPage;
  signinPage= LoginpagePage;
  tabsPage = TabsPage;
  isAuthenticated = false;
  

  @ViewChild('nav') nav : NavController

  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen, 
     private menuCtrl: MenuController,
     private authService: AuthService,
     fcm: FcmProvider,
     toastCtrl: ToastController
    ) {

      platform.ready().then(() => {

        // Get a FCM token
        fcm.getToken()
        // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe()
    });
  
    firebase.initializeApp({
      apiKey: "AIzaSyBGM4oT6gmKxjNpFlUxy0v-yRcWEJk7IIs",
      authDomain: "signspin-app.firebaseapp.com",
      databaseURL: "https://signspin-app.firebaseio.com",
      projectId: "signspin-app",
      storageBucket: "signspin-app.appspot.com",
      messagingSenderId: "483860303310"
    });

   
  
    firebase.auth().onAuthStateChanged(user=> {
        if(user){
          this.isAuthenticated = true;
          this.rootPage = TabsPage;
        }else{
          this.isAuthenticated= false;
          this.rootPage = LoginpagePage;
        }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
   this.nav.setRoot(page);
   this.menuCtrl.close();
  }
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginpagePage);
  }
 

}





