import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core'; //Component
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ShiftplanningPage } from '../pages/shiftplanning/shiftplanning';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { OpenshiftsPage } from '../pages/openshifts/openshifts';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { ClosedshiftsPage } from '../pages/closedshifts/closedshifts';
import { MyshiftsPage } from '../pages/myshifts/myshifts';
import { AuthService } from '../services/auth';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { Firebase } from '@ionic-native/firebase';
import { Push } from '@ionic-native/push';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { FcmProvider } from '../providers/fcm/fcm';
//import firebase from 'firebase';
//import {  AuthProviders } from '../providers/auth/auth';
//import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module';
//import { ProfilePageModule } from '../pages/profile/profile.module';
var config = {
  apiKey: "AIzaSyCCkhhDyVrLqndvmn_93nQVUx4RO-atRxg",
  authDomain: "signspin-7f462.firebaseapp.com",
  //databaseURL: "https://signspin-7f462.firebaseio.com",
  //projectId: "signspin-7f462",
 // storageBucket: "signspin-7f462.appspot.com",
  messagingSenderId: "585954348031"
};

/*var config = {
  apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
  authDomain: "myproject-2c6c2.firebaseapp.com",
  databaseURL: "https://myproject-2c6c2.firebaseio.com",
  projectId: "myproject-2c6c2",
  storageBucket: "myproject-2c6c2.appspot.com",
  messagingSenderId: "468750777039"
};  */
//firebase.initializeApp(config); 





@NgModule({
  
  declarations: [
    MyApp,
    ProfilePage,
    ShiftplanningPage,
    TabsPage,
    SignupPage,
    OpenshiftsPage,
    LoginpagePage,
    OpenshiftsPage,
    ClosedshiftsPage,
    MyshiftsPage
   
    
   
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {scrollAssist: false}),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
    //EditProfilePageModule,
    //ProfilePageModule,
    
    
   
    

    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ShiftplanningPage,
    TabsPage,
    SignupPage,
    OpenshiftsPage,
    LoginpagePage,
    OpenshiftsPage,
    ClosedshiftsPage,
    MyshiftsPage
   
 
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    //Firebase
    //AuthProviders
    
    //FcmProvider 
  
  ]
})
export class AppModule {}
