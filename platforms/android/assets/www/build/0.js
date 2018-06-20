webpackJsonp([0],{

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */],
            ],
            imports: [],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { FcmProvider } from '../../providers/fcm/fcm';
//import { tap } from 'rxjs/operators';
var HomePage = (function () {
    /*firestore =  firebase.database().ref('/pushtokens');
     firemsg = firebase.database().ref('/messages');  */
    function HomePage(navCtrl, navParams, 
        //public fcm : FcmProvider,
        afAuth, afDatabase, toastCtrl
        /* private platform: Platform
         public afd: AngularFireDatabase*/
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toastCtrl = toastCtrl;
        this.profile = {};
        //Get a FCM token
        /* this.fcm.getToken()
        
         this.fcm.listenToNotifications().pipe(
      
          tap(msg =>{
            const toast = this.toastCtrl.create({
               message: msg.body,
               duration: 3000
      
            });
             toast.present();
          })
         )
         .subscribe()
        this.tokensetup().then((token) =>{
          this.storetoken(token);
        });
        this.onNotification();
        }
      
      
        async onNotification(){
         await this.platform.ready();
         FCMPlugin.onNotification((data)=>{
           console.log(data);
         }, (error)=> console.error(error));
        }
        catch(e){
          console.error(e);
        }
          /*ionViewDidLoad(){
          FCMPlugin.onNotification(function(data){
            if(data.wasTapped){
              //Notification was received on device tray and tapped by the user.
              alert( JSON.stringify(data) );
            }else{
              //Notification was received in foreground. Maybe the user needs to be notified.
              alert( JSON.stringify(data) );
            }
        });
        FCMPlugin.onTokenRefresh(function(token){
          alert( token );
      });
        }
        tokensetup(){
          var promise = new promise((resolve, reject) =>{
            FCMPlugin.getToken(function(token){
              resolve(token);
          }, (err) =>{
            reject(err);
          });
      
          })
          return promise;
        }
        storetoken(t){
         this.afd.list(this.firestore).push({
           uid: firebase.auth().currentUser.uid,
           devtoken: t
         }). then(() =>{
           alert('Token stored');
         }).catch(()=>{
           alert('Token not stored');
         })
      
         this.afd.list(this.firemsg).push({
           sendername: firebase.auth().currentUser.displayName,
           message: 'Hello'
         }).then(()=>{
           alert('Message stored');
         }).catch(()=>{
           alert('Message not stored');
         })
        }  */
    }
    /*callPostService(name, city){
     let p = this.networkprovider.callPost(name, city)
     .then(data =>{
       console.log("recieved" + JSON.stringify(data.json().data));
     });
    }
    */
    HomePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]); });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n    <ion-title text-center>SignSpin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  \n\n\n\n\n\n \n \n\n\n\n\n<ion-item>\n  <ion-label floating>Username</ion-label>\n  <ion-input [(ngModel)]="profile.username"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>firstname</ion-label>\n  <ion-input [(ngModel)]="profile.firstname"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>LastName</ion-label>\n  <ion-input [(ngModel)]="profile.lastname"></ion-input>\n</ion-item>\n\n\n<button ion-button block clear (click)="createProfile()">Create Profile</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]
            /* private platform: Platform
             public afd: AngularFireDatabase*/
        ])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=0.js.map