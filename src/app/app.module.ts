import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ShiftplanningPage } from '../pages/shiftplanning/shiftplanning';
import { TimeclockPage } from '../pages/timeclock/timeclock';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { ComingshiftsPage } from '../pages/comingshifts/comingshifts';
import { OpenshiftsPage } from '../pages/openshifts/openshifts';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { ClosedshiftsPage } from '../pages/closedshifts/closedshifts';
import { DetailsPage } from '../pages/details/details';
import { MyshiftsPage } from '../pages/myshifts/myshifts';
import { AuthService } from '../services/auth';
import { EditOpenshiftPage } from '../pages/edit-openshift/edit-openshift';
import { ShiftsService } from '../services/shifts';
import { OpenShiftPage } from '../pages/open-shift/open-shift';
import { SignspinDataProvider } from '../providers/signspin-data/signspin-data';
import { HttpModule } from '@angular/http';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';
import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase';
import { Facebook } from '@ionic-native/facebook';
import { Push } from '@ionic-native/push';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { AngularFireModule} from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireAuthModule} from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { FacebookLoginComponent } from '../components/facebook-login/facebook-login';


var config = {
  apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
  authDomain: "myproject-2c6c2.firebaseapp.com",
  databaseURL: "https://myproject-2c6c2.firebaseio.com",
  projectId: "myproject-2c6c2",
  storageBucket: "myproject-2c6c2.appspot.com",
  messagingSenderId: "468750777039"
};





@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ShiftplanningPage,
    TimeclockPage,
    SettingsPage,
    TabsPage,
    SignupPage,
    OpenshiftsPage,
    EditOpenshiftPage,
    ComingshiftsPage,
    LoginpagePage,
    OpenshiftsPage,
    OpenShiftPage,
    ClosedshiftsPage,
    DetailsPage,
    MyshiftsPage,
    HomePage,
    FacebookLoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule

    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ShiftplanningPage,
    TimeclockPage,
    SettingsPage,
    TabsPage,
    SignupPage,
    ComingshiftsPage,
    OpenshiftsPage,
    EditOpenshiftPage,
    OpenShiftPage,
    LoginpagePage,
    OpenshiftsPage,
    ClosedshiftsPage,
    DetailsPage,
    MyshiftsPage,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ShiftsService,
    SignspinDataProvider,
    NetworkEngineProvider,
    Firebase,
    Facebook,
    AuthProvider
    
    /*FcmProvider */
  
  ]
})
export class AppModule {}
