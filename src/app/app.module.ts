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
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';


var config = {
  apiKey: "AIzaSyBGM4oT6gmKxjNpFlUxy0v-yRcWEJk7IIs",  
  authDomain: "signspin-app.firebaseapp.com",
  databaseURL: "https://signspin-app.firebaseio.com",
  projectId: "signspin-app",
  storageBucket: "signspin-app.appspot.com",
  messagingSenderId: "483860303310"
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
    MyshiftsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
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
    MyshiftsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ShiftsService,
    SignspinDataProvider,
    NetworkEngineProvider
  
  ]
})
export class AppModule {}
