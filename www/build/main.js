webpackJsonp([7],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyshiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyshiftsPage = (function () {
    function MyshiftsPage(navCtrl, navParams, loadingCtrl, http, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
    }
    MyshiftsPage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
            console.log(_this.userEmail);
        });
    };
    MyshiftsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyshiftsPage');
        this.getCurrentUser();
        this.onloadJson();
    };
    MyshiftsPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    MyshiftsPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading your shifts'
        });
        loading.present();
        console.log('in loadjson', this.userEmail);
        //let email = "sritejamahadevan@gmail.com";
        var url = "https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Planed/search?email=" + this.userEmail;
        // search?Kunde=JOKEEvents-Berlin-DS-SS
        // search?Kunde=JOKEEvents-Berlin-DS-SS
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            console.log(res, 'in res');
            _this.users = res;
        }, function (err) {
            _this.presentAlert();
            loading.dismiss();
        });
    };
    MyshiftsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Hi',
            subTitle: 'Currently you have no new shifts scheduled:)',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    MyshiftsPage.prototype.defaultMessage = function () {
    };
    MyshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/'<!--\n  Generated template for the MyshiftsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n      <ion-title text-center>MyShifts</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="onloadJson()">\n          <ion-icon name="refresh"></ion-icon>\n        </button>\n       \n    </ion-buttons>\n\n\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n\n\n\n\n\n\n\n  <ion-card *ngFor= "let user of users; let i = index" text-wrap>\n        <ion-card-title text-center text-wrap>\n          <a>{{user.LocationName}}</a>\n        </ion-card-title>\n        <ion-card-header text-left text-wrap>\n            <p><a>Date</a>: {{user.Datum }}</p>\n            <p><a>Kunde</a>: {{ user.LocationName}}</p>\n            <p><a>Address</a>: {{ user.ServiceAddress}}</p>\n            <p><a>Start</a>: {{user.SchStart}}</p>\n            <p><a>End</a>: {{user.SchEnd}}</p>\n            <p><a>Kontakt</a>: {{user.Kontakt}}</p>\n            <p><a>Drive</a>: <a href="{{user.Drive}}" onclick ="window.open( this.href, \'_system\', \'location=yes\'); return false;">\n              \n              {{user.Drive}}</a></p> \n           \n            \n           \n        </ion-card-header>\n        \n      \n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyshiftsPage);
    return MyshiftsPage;
}());

//# sourceMappingURL=myshifts.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkEngineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkEngineProvider = (function () {
    function NetworkEngineProvider(http) {
        this.http = http;
        console.log('Hello NetworkEngineProvider Provider');
    }
    NetworkEngineProvider.prototype.callPost = function (name, city) {
        console.log("name =" + name, "city =" + city);
        var param = { Title: name, Location: city };
        var url = "https://script.googleusercontent.com/macros/echo?user_content_key=KnMOpRSBB9QnwA__JhM33hRTxgwvCtJrQZ9TiiSAiA3Z2Xpdu_DhqR84dgENyyKTDiEP0yOCACwsr260fviJ3V31zHuh9jq5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp7VtjYS6BG3NcwNOxiBwrD95fAxDfxvwqqzBHjvr-3_85BPy4_3_gBux4Rx99sEiCsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx";
        var request = this.http.post(url, param);
        return request.toPromise();
    };
    NetworkEngineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NetworkEngineProvider);
    return NetworkEngineProvider;
}());

//# sourceMappingURL=network-engine.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shifts__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { OpenShiftPage } from '../open-shift/open-shift';




var OpenshiftsPage = (function () {
    function OpenshiftsPage(
        //private navCtrl: NavController,
        shiftService, http, loadingCtrl, actionSheetController, alertCtrl, 
        //private toastCtrl: ToastController,
        afAuth) {
        this.shiftService = shiftService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
    }
    OpenshiftsPage.prototype.ionViewDidLoad = function () {
        console.log('I am teja');
        this.onloadJson();
    };
    OpenshiftsPage.prototype.ionViewWillEnter = function () {
        this.openShifts = this.shiftService.getShifts();
        this.getCurrentUser();
    };
    OpenshiftsPage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
            console.log(_this.userEmail);
        });
    };
    OpenshiftsPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading open shifts'
        });
        loading.present();
        this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Open")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            _this.users = res;
        }, function (err) {
            alert("failed loading json data");
        });
    };
    OpenshiftsPage.prototype.onInterested = function (user) {
        var _this = this;
        console.log(user);
        var actionSheet = this.actionSheetController.create({
            title: 'Here are your options..!!',
            buttons: [
                {
                    text: 'Interested !!',
                    handler: function () {
                        //
                        //this.navCtrl.push(EditOpenshiftPage, user);
                        _this.messageBox(user);
                    }
                },
                {
                    text: 'Not Interested',
                    role: 'destructive',
                    handler: function () {
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel' // Handler runs first when you click a button but here we did not mention any handler. so it gets cancelled automatically
                }
            ]
        });
        actionSheet.present();
    };
    OpenshiftsPage.prototype.messageBox = function (user) {
        // this.createAlert(user);
        this.createAlert(user).present();
    };
    //
    OpenshiftsPage.prototype.createAlert = function (user) {
        var _this = this;
        // console.log('alert',user);
        return this.alertCtrl.create({
            title: 'Add Message',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Message',
                    type: 'ion-textarea',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Send Request',
                    handler: function (data) {
                        /*if(data.trim() == '' || data == null){
                         const toast = this.toastCtrl.create({
                           message:'Please enter a valid value',
                           duration: 1500,
                           position: 'bottom'
            
                         })
                        
                        
                         return;
                        }*/
                        var loading = _this.loadingCtrl.create({
                            content: 'Sending your request'
                        });
                        loading.present();
                        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        // this.message = JSON.parse(data);
                        console.log('in add', data.name, user);
                        var postParams = user;
                        //let email= this.userEmail;
                        postParams.email = _this.userEmail;
                        postParams.message = data.name;
                        postParams.timeStamp = new Date().toLocaleString();
                        _this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/IncomingMessages", JSON.stringify(postParams), options)
                            .subscribe(function (data) {
                            console.log(data);
                            loading.dismiss();
                            var alert = _this.alertCtrl.create({
                                title: 'Thank you',
                                message: 'Request sent successfully !',
                                buttons: ['Ok']
                            });
                            alert.present();
                        }, function (error) {
                            console.log(error); // Error getting the data
                        });
                    }
                }
            ]
        });
    };
    OpenshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-openshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/'\n<ion-header>\n  <ion-navbar>\n \n    <ion-buttons end>\n      <button ion-button icon-only (click)="onloadJson()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n     </ion-buttons>\n    <ion-title text-center>Open Shifts</ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n\n\n<ion-content padding class="background">\n  \n  <!--<ion-card *ngFor= "let openShift of openShifts; let i = index">\n    <ion-card-title text-center>\n      {{openShift.Title}}\n    </ion-card-title>\n    <ion-card-header text-center>\n        <p> Date: {{openShift.date}}</p>\n        <p>Location:{{ openShift.location}}</p>\n        <p>Timing: {{openShift.StartTime}} to {{openShift.EndTime}}</p>\n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        small\n        clear\n        (click)="onLoadShift(openShift, i)">Details</button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>  -->\n\n  <ion-card *ngFor= "let user of users; let i = index" text-wrap>\n    <ion-card-title text-center>\n      <a>{{ user.Kunde}}</a>\n    </ion-card-title>\n    <ion-card-header text-left text-wrap>\n\n        \n        <p><a>Date</a>: {{user.Datum }}</p>\n        <p><a>Kunde</a>: {{ user.Kunde}}</p>\n        <p><a>Address</a>: {{ user.ServiceAddress}}</p>\n        <p><a>Start</a>: {{user.SchStart}}</p>\n        <p><a>End</a>: {{user.SchEnd}}</p>\n        \n       \n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        large\n        clear\n        (click)= "onInterested(user)"\n        ><ion-icon name="eye" icon-only></ion-icon></button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>\n  \n  \n  \n   \n  \n    </ion-content>\n  \n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shifts__["a" /* ShiftsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], OpenshiftsPage);
    return OpenshiftsPage;
}());

//# sourceMappingURL=openshifts.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/closedshifts/closedshifts.module": [
		523,
		6
	],
	"../pages/comingshifts/comingshifts.module": [
		524,
		5
	],
	"../pages/details/details.module": [
		525,
		4
	],
	"../pages/home/home.module": [
		526,
		3
	],
	"../pages/loginpage/loginpage.module": [
		527,
		2
	],
	"../pages/myshifts/myshifts.module": [
		528,
		1
	],
	"../pages/settings/settings.module": [
		529,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FacebookLoginComponent } from '../../components/facebook-login/facebook-login';
var LoginpagePage = (function () {
    function LoginpagePage(navCtrl, navParams, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginpagePage');
    };
    LoginpagePage.prototype.onclick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginpagePage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in ...'
        });
        loading.present();
        this.authService.signin(form.value.email, form.value.password)
            .then(function (data) {
            console.log(data.email);
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed !!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    LoginpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginpage',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/'<ion-header>\n<ion-navbar color="background">\n    \n</ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n  \n  \n  \n  \n  \n   \n   <!-- <facebook-login></facebook-login> -->\n  \n\n\n\n\n \n      <p>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="50px" width="170px" >\n      </p>  \n  <ion-card>\n    <ion-card-header text-center>\n      Login Form\n    </ion-card-header>\n    <ion-card-content>\n      <form #f= "ngForm" (ngSubmit)="onSignin(f)">\n      <ion-list>\n\n              <ion-item>\n                  <ion-input type="text" name="email" placeholder="email" ngModel required ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="password" placeholder="Password" name="password" ngModel required></ion-input>\n        \n                </ion-item>\n        \n       \n\n\n      </ion-list>\n      \n      <button ion-button type="submit" block [disabled]="!f.valid">Login</button>\n      \n    </form>\n      \n     \n     \n      \n    </ion-card-content>\n  </ion-card>\n<button class="bottom" ion-button clear full color="light" (click)="onclick()">Don\'t have an account? Sign Up</button> \n</ion-content>  \n\n\n\n\n\n\n\n\n\n<!--<button ion-button block color="facebook">\n      <ion-icon name="logo-facebook"></ion-icon> Login with facebook\n    </button>-->'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginpagePage);
    return LoginpagePage;
}());

//# sourceMappingURL=loginpage.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl, http) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    SignupPage.prototype.onSignup = function (form) {
        ///Posting signup page data to google sheets
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up'
        });
        loading.present();
        this.authService.signup(form.value.email, form.value.password)
            .then(function (data) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users", JSON.stringify(form.value), options)
                .subscribe(function (data) {
                console.log(data);
            });
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/'\n<ion-header>\n    \n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>SignUp Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <h3 text-center>SignUp Form</h3>\n<form #f= "ngForm" (ngSubmit)="onSignup(f)">\n  <ion-list>\n    <ion-card>\n    <ion-item>\n      <ion-label fixed >Vorname</ion-label>\n      <ion-input\n     type="text" \n      name="Vorname"\n      ngModel\n      required\n      ></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label fixed >Nachname</ion-label>\n      <ion-input type="text" \n     \n      name="Nachname"\n      ngModel\n      required\n      ></ion-input>\n    </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-label fixed >Email</ion-label>\n        <ion-input type="email" \n       \n        name="email"\n        ngModel\n        required\n        ></ion-input>\n      </ion-item>\n      </ion-card>\n      <ion-card>\n        <ion-item>\n          <ion-label fixed >Handynummer</ion-label>\n          <ion-input type="number" \n         \n          name="Handynummer"\n          ngModel\n          required\n          ></ion-input>\n        </ion-item>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-label fixed >Bahncard</ion-label>\n            <ion-input type="text" \n           \n            name="Bahncard"\n            ngModel\n            required\n            ></ion-input>\n          </ion-item>\n          </ion-card>\n          <ion-card>\n            <ion-item>\n              <ion-label fixed >Geburtsdatum</ion-label>\n              <ion-input type="date" \n             \n              name="Geburtsdatum"\n              ngModel\n              required\n              ></ion-input>\n            </ion-item>\n            </ion-card>\n            <ion-card>\n              <ion-item>\n                <ion-label fixed >StraßeHausnummer</ion-label>\n                <ion-input type="text" \n               \n                name="StraßeHausnummer"\n                ngModel\n                required\n                ></ion-input>\n              </ion-item>\n              </ion-card>\n              <ion-card>\n                <ion-item>\n                  <ion-label fixed >Stadt</ion-label>\n                  <ion-input type="text" \n                 \n                  name="Stadt"\n                  ngModel\n                  required\n                  ></ion-input>\n                </ion-item>\n                </ion-card>\n                <ion-card>\n                  <ion-item>\n                    <ion-label fixed >Bundesland</ion-label>\n                    <ion-input type="text" \n                   \n                    name="Bundesland"\n                    ngModel\n                    required\n                    ></ion-input>\n                  </ion-item>\n                  </ion-card>\n                  <ion-card>\n                    <ion-item>\n                      <ion-label fixed >PLZ</ion-label>\n                      <ion-input type="number" \n                     \n                      name="PLZ"\n                      ngModel\n                      required\n                      ></ion-input>\n                    </ion-item>\n                    </ion-card>\n                    <ion-card>\n                      <ion-item>\n                        <ion-label fixed >Körpergröße</ion-label>\n                        <ion-input type="text" \n                       \n                        name="Körpergröße"\n                        ngModel\n                        required\n                        ></ion-input>\n                      </ion-item>\n                      </ion-card>\n                      <ion-card>\n                        <ion-item>\n                          <ion-label fixed >T-ShirtGröße</ion-label>\n                          <ion-input type="text" \n                         \n                          name="T-ShirtGröße"\n                          ngModel\n                          required\n                          ></ion-input>\n                        </ion-item>\n                        </ion-card>\n                        <ion-card>\n                          <ion-item>\n                            <ion-label fixed >Bankname</ion-label>\n                            <ion-input type="text" \n                           \n                            name="Bankname"\n                            ngModel\n                            required\n                            ></ion-input>\n                          </ion-item>\n                          </ion-card>\n                          <ion-card>\n                            <ion-item>\n                              <ion-label fixed >IBAN</ion-label>\n                              <ion-input type="text" \n                             \n                              name="IBAN"\n                              ngModel\n                              required\n                              ></ion-input>\n                            </ion-item>\n                            </ion-card>\n                            <ion-card>\n                              <ion-item>\n                                <ion-label fixed >BIC</ion-label>\n                                <ion-input type="text" \n                               \n                                name="BIC"\n                                ngModel\n                                required\n                               ></ion-input>\n                              </ion-item>\n                              </ion-card>\n                              <ion-card>\n                                <ion-item>\n                                  <ion-label fixed >RV-Nummer</ion-label>\n                                  <ion-input type="text" \n                                 \n                                  name="RV-Nummer"\n                                  ngModel\n                                  required\n                                  ></ion-input>\n                                </ion-item>\n                                </ion-card>\n                                <ion-card>\n                                  <ion-item>\n                                    <ion-label fixed >Steuer-ID</ion-label>\n                                    <ion-input type="text" \n                                   \n                                    name="Steuer-ID"\n                                    ngModel\n                                    required\n                                    ></ion-input>\n                                  </ion-item>\n                                  </ion-card>\n                    \n    \n  <ion-card>\n   <ion-item>\n        <ion-label fixed >Password</ion-label>\n        <ion-input \n        type="password"\n        name="password"\n        ngModel \n         required\n         [minlength]="6"\n         ></ion-input>\n\n    </ion-item>\n  </ion-card>\n  </ion-list>\n  <button ion-button block type="submit" [disabled]="!f.valid">SignUp</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { AngularFireList} from 'angularfire2/database';
//import { AuthProviders } from '../../providers/auth/auth';
//import { EditProfilePage } from '../edit-profile/edit-profile';
//import { Observable } from 'rxjs/Observable';
/*
import firebase from 'firebase';
declare let FCMPlugin;  */
var ProfilePage = (function () {
    /*firestore =  firebase.database().ref('/pushtokens');
     firemsg = firebase.database().ref('/messages');  */
    function ProfilePage(navCtrl, navParams, http, networkprovider, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.networkprovider = networkprovider;
        this.afAuth = afAuth;
        this.toast = toast;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getCurrentUser();
    };
    ProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.getCurrentUser();
        this.afAuth.authState.take(1).subscribe(function (data) {
            console.log('A informatica', data);
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome to SignSpin Application, " + data.email,
                    duration: 3000
                }).present();
            }
        });
    };
    ProfilePage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/'\n  <ion-header>\n\n    <ion-navbar>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n      <ion-title text-center>Profile</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n  <ion-content  class="Notifications">\n     \n\n\n\n     \n\n    <ion-card color= "light" >\n     \n      <ion-card-title text-center text-wrap>\n           Hi {{userEmail}}\n      </ion-card-title>\n    \n    \n    \n    \n    <ion-card-header text-center text-wrap>\n\n      \n      <h5>Welcome to SignSpin Application</h5>\n      \n      <p>for more information<a href="#" onclick="window.open(\'http://www.signspin.de/\', \'_system\', \'location=yes\'); return false;">\n        Click here\n      </a></p>  \n      \n        \n      \n    </ion-card-header>\n  </ion-card>\n    \n\n\n\n\n\n\n\n    <!--<ng-container *ngIf="auth.user | async as user">\n\n    <img [src]="user.photoURL" >\n    <h2>{{user.displayName}}</h2>\n    <button ion-button small (click)="openEditPage()">\n      Edit Profile \n    </button>\n\n\n\n\n  </ng-container> -->\n\n\n\n  </ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftplanningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__openshifts_openshifts__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__closedshifts_closedshifts__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShiftplanningPage = (function () {
    function ShiftplanningPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    ShiftplanningPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__openshifts_openshifts__["a" /* OpenshiftsPage */]);
    };
    ShiftplanningPage.prototype.pageload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__closedshifts_closedshifts__["a" /* ClosedshiftsPage */]);
    };
    ShiftplanningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shiftplanning',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n  \n      <ion-title text-center>Shift Planning</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="background">\n    <ion-list>\n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n           (click)="onload()"\n          >\n            <ion-icon name="mail-open"></ion-icon><a>Open shifts</a>\n           </button>\n          </ion-card-content> \n        </ion-card>\n   \n     \n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n            (click)= "pageload()">\n            <ion-icon name="mail"></ion-icon>\n            <a>Closed shifts</a></button>\n          </ion-card-content> \n        </ion-card>\n           \n        \n      \n        \n    </ion-list>\n\n    \n    \n  \n    \n     \n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ShiftplanningPage);
    return ShiftplanningPage;
}());

//# sourceMappingURL=shiftplanning.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClosedshiftsPage = (function () {
    function ClosedshiftsPage(navCtrl, navParams, loadingCtrl, http, alertCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
    }
    ClosedshiftsPage.prototype.ionViewDidLoad = function () {
        this.onloadJson();
        this.getCurrentUser();
    };
    ClosedshiftsPage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
            console.log(_this.userEmail);
        });
    };
    ClosedshiftsPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading closed shifts'
        });
        loading.present();
        var url = "https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Closed/search?email=" + this.userEmail;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            _this.users = res;
        }, function (err) {
            _this.presentAlert();
            loading.dismiss();
        });
    };
    ClosedshiftsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Hi',
            subTitle: 'Currently you have no new shifts scheduled here:)',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ClosedshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closedshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Closed shifts</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onloadJson()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n     </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n\n\n  <ion-card *ngFor= "let user of users; let i = index" text-wrap>\n    <ion-card-title text-center>\n      <a>{{user.LocationName}}</a>\n    </ion-card-title>\n    <ion-card-header text-left text-wrap>\n        <p><a>Date</a>: {{user.Datum}}</p>\n        <p><a>Bonus</a>: {{ user.Bonus}}</p>\n        <p><a>Spesen/Kilometergeld</a>: {{user.Spesen}}</p>\n        <p><a>Gehalt</a>: {{user.Gehalt}}</p>\n        <p><a>SchStart</a>: {{user.SchStart}}</p>\n        <p><a>SchEnd</a>: {{user.SchEnd}}</p>\n        \n        <!--<p>Drive: <a href="{{user.drive}}" onclick ="window.open( this.href, \'_system\', \'location=yes\'); return false;">\n              \n          {{user.drive}}</a></p>  -->\n      \n       \n    </ion-card-header>\n    <!--<ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        large\n        clear\n        (click)= "onInterested()"\n        ><ion-icon name="eye" icon-only></ion-icon></button>\n        \n      </ion-col>\n    </ion-row> -->\n  \n  \n  </ion-card>\n  \n  \n  \n   \n  \n    </ion-content>\n  \n  '/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ClosedshiftsPage);
    return ClosedshiftsPage;
}());

//# sourceMappingURL=closedshifts.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeclockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeclockPage = (function () {
    function TimeclockPage() {
    }
    TimeclockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeclock',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/timeclock/timeclock.html"*/'\n<ion-header>\n    <ion-toolbar>\n     <ion-navbar>\n         <ion-segment>\n             <ion-segment-button value="new">\n               TimeClock\n             </ion-segment-button>\n             <ion-segment-button value="hot">\n               TimeSheets\n             </ion-segment-button>\n           </ion-segment>\n         <ion-buttons end>\n           <button ion-button icon-only menuToggle>\n             <ion-icon name="menu"></ion-icon>\n           </button>\n         </ion-buttons>\n        \n   \n       \n     </ion-navbar>\n   </ion-toolbar>\n   </ion-header>\n  \n\n\n\n\n\n\n\n\n<ion-content class="background">\n  \n\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/timeclock/timeclock.html"*/
        })
    ], TimeclockPage);
    return TimeclockPage;
}());

//# sourceMappingURL=timeclock.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comingshifts_comingshifts__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_openshifts_openshifts__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loginpage_loginpage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_closedshifts_closedshifts__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_myshifts_myshifts__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_openshift_edit_openshift__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_shifts__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_open_shift_open_shift__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_signspin_data_signspin_data__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_network_engine_network_engine__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_firebase__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_home__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 //Component







//import { SettingsPage } from '../pages/settings/settings';

















//import { Facebook } from '@ionic-native/facebook';






//import { FcmProvider } from '../providers/fcm/fcm';

//import {  AuthProviders } from '../providers/auth/auth';
//import { FacebookLoginComponent } from '../components/facebook-login/facebook-login';
//import { FacebookLogoutComponent } from '../components/facebook-logout/facebook-logout';
//import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module';
//import { ProfilePageModule } from '../pages/profile/profile.module';
//import { ComponentsModule } from '../components/components.module';
var config = {
    apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
    authDomain: "myproject-2c6c2.firebaseapp.com",
    databaseURL: "https://myproject-2c6c2.firebaseio.com",
    projectId: "myproject-2c6c2",
    storageBucket: "myproject-2c6c2.appspot.com",
    messagingSenderId: "468750777039"
};
__WEBPACK_IMPORTED_MODULE_32_firebase___default.a.initializeApp(config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__["a" /* ShiftplanningPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__["a" /* TimeclockPage */],
                //SettingsPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_openshift_edit_openshift__["a" /* EditOpenshiftPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comingshifts_comingshifts__["a" /* ComingshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loginpage_loginpage__["a" /* LoginpagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_open_shift_open_shift__["a" /* OpenShiftPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_closedshifts_closedshifts__["a" /* ClosedshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myshifts_myshifts__["a" /* MyshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { scrollAssist: false }, {
                    links: [
                        { loadChildren: '../pages/closedshifts/closedshifts.module#ClosedshiftsPageModule', name: 'ClosedshiftsPage', segment: 'closedshifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comingshifts/comingshifts.module#ComingshiftsPageModule', name: 'ComingshiftsPage', segment: 'comingshifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginpage/loginpage.module#LoginpagePageModule', name: 'LoginpagePage', segment: 'loginpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myshifts/myshifts.module#MyshiftsPageModule', name: 'MyshiftsPage', segment: 'myshifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_database__["b" /* AngularFireDatabaseModule */]
                //EditProfilePageModule,
                //ProfilePageModule,
                //ComponentsModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__["a" /* ShiftplanningPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__["a" /* TimeclockPage */],
                //SettingsPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comingshifts_comingshifts__["a" /* ComingshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_openshift_edit_openshift__["a" /* EditOpenshiftPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_open_shift_open_shift__["a" /* OpenShiftPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loginpage_loginpage__["a" /* LoginpagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_closedshifts_closedshifts__["a" /* ClosedshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_myshifts_myshifts__["a" /* MyshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__services_shifts__["a" /* ShiftsService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_signspin_data_signspin_data__["a" /* SignspinDataProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_firebase__["a" /* Firebase */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myshifts_myshifts__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import { AuthProvider } from '@firebase/auth-types';
//import { AuthProviders } from '../providers/auth/auth';
//import { ProfilePage } from '../pages/profile/profile';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authService) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */];
        this.MyshiftsPage = __WEBPACK_IMPORTED_MODULE_6__pages_myshifts_myshifts__["a" /* MyshiftsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
        this.isAuthenticated = false;
        platform.ready().then(function () {
            /*
                firebase.initializeApp({
                apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
                authDomain: "myproject-2c6c2.firebaseapp.com",
                databaseURL: "https://myproject-2c6c2.firebaseio.com",
                projectId: "myproject-2c6c2",
                storageBucket: "",
                messagingSenderId: "468750777039"
                    
                  });
            
                    
                    auth.getPresentUser()
                    .then(user => {
                      if(user){
                        this.rootPage = ProfilePage
                      }else {
                        this.rootPage = LoginpagePage
                      }
            
                      statusBar.styleDefault();
                      splashScreen.hide();
                    })
                    */
            /*  // Get a FCM token
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
          .subscribe()     */
        });
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.isAuthenticated = false;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.pushSetup();
        });
    }
    /*pushSetup(){
      const options: PushOptions = {
        android: {
          senderID: '483860303310',
          sound: 'true'
  
          
        },
        ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
        },
        windows: {},
        browser: {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
     };
     
     const pushObject: PushObject = this.push.init(options);
     
     
     pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
     
     pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
     
     pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }    */
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                Menu\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class="background" >\n        <ion-list class="background">\n           <!-- <button\n            ion-item\n            icon-left\n            (click)= "onLoad(MyshiftsPage)"\n            *ngIf="isAuthenticated">\n           \n            <ion-icon name="book"></ion-icon>\n            MyShifts</button>   -->\n            <button\n            ion-item\n            icon-left\n            (click)= "onLogout()"\n            *ngIf="isAuthenticated">\n            <ion-icon name="log-out"></ion-icon>\n\n            LogOut</button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu> \n<ion-nav [root]="rootPage" #nav></ion-nav>\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shift; });
var shift = (function () {
    function shift(Title, location, Street, Day, date, StartTime, EndTime, DressCode, Signs, Otherinfo) {
        this.Title = Title;
        this.location = location;
        this.Street = Street;
        this.Day = Day;
        this.date = date;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
        this.DressCode = DressCode;
        this.Signs = Signs;
        this.Otherinfo = Otherinfo;
    }
    return shift;
}());

//# sourceMappingURL=shift.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingshiftsPage = (function () {
    function ComingshiftsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComingshiftsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingshiftsPage');
    };
    ComingshiftsPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */]);
    };
    ComingshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comingshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/comingshifts/comingshifts.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Coming shifts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n   <!-- <ion-card color= "light">\n        \n        <ion-card-content>\n            <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="70px" width="15px"/>\n          <ion-card-title>\n            Decathlon <br />\n            Berlin<br />\n            20.02.2018\n            <ion-row>\n                <ion-col text-right>\n                  <button ion-button\n                  outline\n                  (click)="onload()"\n                  >Details</button>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card-title>\n        \n        </ion-card-content >\n      </ion-card>\n\n      <ion-card color = "light">\n          \n          <ion-card-content>\n              <img src="http://oi67.tinypic.com/wiv8xt.jpg" height="100px" width="15px" />\n            <ion-card-title text-right>\n              Decathlon <br />\n              Berlin<br />\n              20.02.2018\n              <ion-row>\n                  <ion-col text-left>\n                    <button ion-button\n                    outline\n                    (click)= "onload()"\n                    >Details</button>\n                  </ion-col>\n                </ion-row>\n              \n              </ion-card-title>\n          \n          </ion-card-content>\n\n        \n        </ion-card>-->\n        \n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/comingshifts/comingshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ComingshiftsPage);
    return ComingshiftsPage;
}());

//# sourceMappingURL=comingshifts.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOpenshiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shifts__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openshifts_openshifts__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditOpenshiftPage = (function () {
    function EditOpenshiftPage(navCtrl, navParams, shiftService, http, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shiftService = shiftService;
        this.http = http;
        this.afAuth = afAuth;
    }
    EditOpenshiftPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('Datum'));
        this.getCurrentUser();
    };
    EditOpenshiftPage.prototype.onClick = function (form) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users", JSON.stringify(form.value), options)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    EditOpenshiftPage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
            console.log(_this.userEmail);
        });
    };
    EditOpenshiftPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initializeForm();
    };
    EditOpenshiftPage.prototype.onSubmit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var value = this.shiftForm.value;
        this.shiftService.addShift(value.Title, value.location, value.Street, value.Day, value.date, value.StartTime, value.EndTime, value.DressCode, value.Signs, value.Otherinfo);
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__openshifts_openshifts__["a" /* OpenshiftsPage */]);
        this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(value))
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    EditOpenshiftPage.prototype.initializeForm = function () {
        this.shiftForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Street': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Day': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Otherinfo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    EditOpenshiftPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-openshift',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/edit-openshift/edit-openshift.html"*/'<!--\n  Generated template for the EditOpenshiftPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fill it up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n \n  <h3 text-center>SignUp Form</h3>\n  <form #f= "ngForm" (ngSubmit)="onClick(f)">\n    <ion-list>\n      <ion-card>\n      <ion-item>\n        <ion-label fixed >FullName</ion-label>\n        <ion-input\n       type="text" \n        name="Datum"\n        ngModel\n        ></ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-label fixed >Email</ion-label>\n        <ion-input type="email" \n       \n        name="email"\n        ngModel= {{userEmail}}\n        required></ion-input>\n      </ion-item>\n      </ion-card>\n      <ion-card>\n      <ion-item>\n          <ion-label fixed >Username</ion-label>\n        <ion-input type="text" \n        name="userName"\n        ngModel\n        ></ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n     <ion-item>\n          <ion-label fixed >Password</ion-label>\n          <ion-input \n          type="password"\n           name="password"\n           ngModel \n           required\n           [minlength]="6"\n           ></ion-input>\n  \n      </ion-item>\n    </ion-card>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">SignUp</button>\n  </form>\n\n\n  <!--<form [formGroup]="shiftForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n  \n      <ion-item>\n        <ion-label floating>LocationName</ion-label>\n        <ion-input type="text"\n       formControlName="location" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>ServiceAddress</ion-label>\n        <ion-input type="text" formControlName="Street"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Day</ion-label>\n   <ion-select formControlName="Day">\n     <ion-option>Monday</ion-option>\n     <ion-option>Tuesday</ion-option>\n     <ion-option>Wednesday</ion-option>\n     <ion-option>Thursday</ion-option>\n     <ion-option>Friday</ion-option>\n     <ion-option>Saturday</ion-option>\n     <ion-option>Sunday</ion-option>\n   </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Date</ion-label>\n        <ion-input type="date" formControlName="date"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Message</ion-label>\n        <ion-textarea type="text" formControlName="Otherinfo"></ion-textarea>\n      </ion-item>\n    \n    </ion-list>\n    <button ion-button type="submit" block color="light">{{mode}} Shift</button>\n  </form>  -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/edit-openshift/edit-openshift.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_shifts__["a" /* ShiftsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], EditOpenshiftPage);
    return EditOpenshiftPage;
}());

//# sourceMappingURL=edit-openshift.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenShiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shifts__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenShiftPage = (function () {
    function OpenShiftPage(navCtrl, navParams, shiftService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shiftService = shiftService;
    }
    OpenShiftPage.prototype.ngOnInit = function () {
        this.openShift = this.navParams.get('openShift');
        this.index = this.navParams.get('index');
    };
    OpenShiftPage.prototype.onAddMyShift = function () {
    };
    OpenShiftPage.prototype.onRemoveMyShift = function () {
    };
    OpenShiftPage.prototype.isInterested = function () {
    };
    OpenShiftPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-open-shift',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/open-shift/open-shift.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Open-shift</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n \n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-header text-center>\n    \n    {{ openShift.Title}}\n\n  </ion-card-header>\n  <ion-card-content>\n      <p>Location: {{ openShift.location}}, {{ openShift.Street}}</p>\n      <p>Date: {{ openShift.date}}, ({{ openShift.Day}})</p>\n      <p>StartTime:{{ openShift.StartTime}}</p>\n      <p>EndTime:{{ openShift.EndTime}}</p>\n      <p>Signs:{{ openShift.Signs}}</p>\n      <p>DressCode:{{ openShift.DressCode}}</p>\n      <p>Others:{{ openShift.Otherinfo}}</p>\n  </ion-card-content>\n  <ion-row>\n    <ion-col text-right>\n      <button\n      ion-button\n      small\n      clear\n      (click)="onAddMyShift()"\n      *ngIf="!isInterested()"\n      >Interested</button>\n      <button\n      ion-button\n      small\n      clear\n      color="danger"\n      (click)="onRemoveMyShift()"\n      *ngIf="isInterested()"\n      >NotInterested</button>\n    </ion-col>\n  </ion-row>   \n\n\n</ion-card>\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/open-shift/open-shift.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shifts__["a" /* ShiftsService */]])
    ], OpenShiftPage);
    return OpenShiftPage;
}());

//# sourceMappingURL=open-shift.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignspinDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignspinDataProvider = (function () {
    function SignspinDataProvider(http) {
        this.http = http;
        console.log('Hello SignspinDataProvider Provider');
    }
    SignspinDataProvider.prototype.getRemoteData = function () {
        this.http.get('https://script.googleusercontent.com/macros/echo?user_content_key=KnMOpRSBB9QnwA__JhM33hRTxgwvCtJrQZ9TiiSAiA3Z2Xpdu_DhqR84dgENyyKTDiEP0yOCACwsr260fviJ3V31zHuh9jq5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp7VtjYS6BG3NcwNOxiBwrD95fAxDfxvwqqzBHjvr-3_85BPy4_3_gBux4Rx99sEiCsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        });
    };
    SignspinDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SignspinDataProvider);
    return SignspinDataProvider;
}());

//# sourceMappingURL=signspin-data.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_network_engine_network_engine__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    /*firestore =  firebase.database().ref('/pushtokens');
     firemsg = firebase.database().ref('/messages');  */
    function HomePage(navCtrl, navParams, 
        //public fcm : FcmProvider,
        networkprovider, afAuth, afDatabase, toastCtrl
        /* private platform: Platform
         public afd: AngularFireDatabase*/
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.networkprovider = networkprovider;
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
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]); });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n    <ion-title text-center>SignSpin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  \n\n\n\n\n\n \n \n\n\n\n\n<ion-item>\n  <ion-label floating>Username</ion-label>\n  <ion-input [(ngModel)]="profile.username"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>firstname</ion-label>\n  <ion-input [(ngModel)]="profile.firstname"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>LastName</ion-label>\n  <ion-input [(ngModel)]="profile.lastname"></ion-input>\n</ion-item>\n\n\n<button ion-button block clear (click)="createProfile()">Create Profile</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]
            /* private platform: Platform
             public afd: AngularFireDatabase*/
        ])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shiftplanning_shiftplanning__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeclock_timeclock__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myshifts_myshifts__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsPage = (function () {
    function TabsPage() {
        this.profilePage = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.shiftPage = __WEBPACK_IMPORTED_MODULE_2__shiftplanning_shiftplanning__["a" /* ShiftplanningPage */];
        this.timePage = __WEBPACK_IMPORTED_MODULE_3__timeclock_timeclock__["a" /* TimeclockPage */];
        this.myShiftPage = __WEBPACK_IMPORTED_MODULE_4__myshifts_myshifts__["a" /* MyshiftsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n  <ion-tabs>\n  <ion-tab [root]=\"profilePage\" tabTitle=\"Profile\" tabIcon =\"person\" ></ion-tab>\n  <ion-tab [root]=\"shiftPage\" tabTitle=\"ShiftPlanning\" tabIcon =\"browsers\" ></ion-tab>\n  \n  <ion-tab [root]=\"myShiftPage\" tabTitle=\"MyShifts\" tabIcon =\"book\" ></ion-tab>\n\n  </ion-tabs>\n  "
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shift__ = __webpack_require__(501);

var ShiftsService = (function () {
    function ShiftsService() {
        this.shifts = [];
    }
    ShiftsService.prototype.addShift = function (Title, location, Street, Day, date, StartTime, EndTime, DressCode, Signs, Otherinfo) {
        this.shifts.push(new __WEBPACK_IMPORTED_MODULE_0__models_shift__["a" /* shift */](Title, location, Street, Day, date, StartTime, EndTime, DressCode, Signs, Otherinfo));
        console.log(this.shifts);
    };
    ShiftsService.prototype.getShifts = function () {
        return this.shifts.slice();
    };
    ShiftsService.prototype.updateShift = function (index, Title, location, Street, Day, date, StartTime, EndTime, DressCode, Signs, Otherinfo) {
        this.shifts[index] = new __WEBPACK_IMPORTED_MODULE_0__models_shift__["a" /* shift */](Title, location, Street, Day, date, StartTime, EndTime, DressCode, Signs, Otherinfo);
    };
    ShiftsService.prototype.removeShift = function (index) {
        this.shifts.splice(index, 1);
    };
    return ShiftsService;
}());

//# sourceMappingURL=shifts.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map