webpackJsonp([7],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shiftplanning_shiftplanning__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeclock_timeclock__ = __webpack_require__(255);
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
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n  <ion-tabs>\n  <ion-tab [root]=\"profilePage\" tabTitle=\"Profile\" tabIcon =\"person\" ></ion-tab>\n  <ion-tab [root]=\"shiftPage\" tabTitle=\"ShiftPlanning\" tabIcon =\"browsers\" ></ion-tab>\n  <ion-tab [root]=\"timePage\" tabTitle=\"TimeClock\" tabIcon =\"timer\" ></ion-tab>\n  </ion-tabs>\n  "
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_openshift_edit_openshift__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shifts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__open_shift_open_shift__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenshiftsPage = (function () {
    function OpenshiftsPage(navCtrl, shiftService, http, loadingCtrl, actionSheetController) {
        this.navCtrl = navCtrl;
        this.shiftService = shiftService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
    }
    OpenshiftsPage.prototype.ionViewWillEnter = function () {
        this.openShifts = this.shiftService.getShifts();
    };
    OpenshiftsPage.prototype.onNewOpenShift = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_openshift_edit_openshift__["a" /* EditOpenshiftPage */], { mode: 'New' });
    };
    OpenshiftsPage.prototype.onLoadShift = function (openShift, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__open_shift_open_shift__["a" /* OpenShiftPage */], { openShift: openShift, index: index });
    };
    OpenshiftsPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading open shifts'
        });
        loading.present();
        this.http.get('https://script.googleusercontent.com/macros/echo?user_content_key=PohyX7kTKOInERuTH6a5i8f-FMmBbhIm4XO-33E5CZlzVxcQqCXdE1DAwakKF6intSgzimmcIZE4tsSGg-OdMmy4B8NoVh-BOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp7VtjYS6BG3NcwNOxiBwrD95fAxDfxvwqqzBHjvr-3_85BPy4_3_gBux4Rx99sEiCsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            _this.users = res.Sheet1;
        }, function (err) {
            alert("failed loading json data");
        });
    };
    OpenshiftsPage.prototype.onInterested = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'Here are your options..!!',
            buttons: [
                {
                    text: 'Interested !!',
                    handler: function () {
                        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var loading = _this.loadingCtrl.create({
                            content: 'Sending your request'
                        });
                        loading.present();
                        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        var postParams = {
                            Request: 'Hi Philipp, I am Interested in doing this job',
                            Others: 'Nothing'
                        };
                        _this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(postParams), options)
                            .subscribe(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.log(error); // Error getting the data
                        });
                        loading.dismiss();
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
    OpenshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-openshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n     <button ion-button icon-only (click)="onNewOpenShift()">\n       <ion-icon name="add"></ion-icon>\n     </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onloadJson()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n     </ion-buttons>\n    <ion-title>Open Shifts</ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n\n\n<ion-content padding>\n  <button ion-button block (click)="onloadJson()">Click me for open shifts</button>\n  <ion-card *ngFor= "let openShift of openShifts; let i = index">\n    <ion-card-title text-center>\n      {{openShift.Title}}\n    </ion-card-title>\n    <ion-card-header text-center>\n        <p> Date: {{openShift.date}}</p>\n        <p>Location:{{ openShift.location}}</p>\n        <p>Timing: {{openShift.StartTime}} to {{openShift.EndTime}}</p>\n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        small\n        clear\n        (click)="onLoadShift(openShift, i)">Details</button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>\n\n  <ion-card *ngFor= "let user of users; let i = index">\n    <ion-card-title text-center>\n      {{user.Title}}\n    </ion-card-title>\n    <ion-card-header text-left>\n        <p> Date:    {{user.Date}}</p>\n        <p>Location: {{ user.Location}}</p>\n        <p>Street:   {{ user.Street}}</p>\n\n        <p>Timing:   {{user.StartTime}} to {{user.EndTime}}</p>\n        <p>Signs:    {{ user.Signs}}</p>\n        <p>DressCode:{{ user.DressCode}}</p>\n        <p>Others:   {{ user.Otherinfo}}</p>\n       \n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        large\n        clear\n        (click)= "onInterested()"\n        ><ion-icon name="eye" icon-only></ion-icon></button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>\n  \n  \n  \n   \n  \n    </ion-content>\n  \n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_shifts__["a" /* ShiftsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], OpenshiftsPage);
    return OpenshiftsPage;
}());

//# sourceMappingURL=openshifts.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(150);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ComingshiftsPage);
    return ComingshiftsPage;
}());

//# sourceMappingURL=comingshifts.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            selector: 'page-loginpage',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/'<ion-header>\n<ion-navbar color="background">\n    \n</ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <p>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="50px" width="170px" >\n      </p>  \n  <ion-card>\n    <ion-card-header text-center>\n      Login Form\n    </ion-card-header>\n    <ion-card-content>\n      <form #f= "ngForm" (ngSubmit)="onSignin(f)">\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" name="email" placeholder="email" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="password" placeholder="Password" name="password" ngModel required></ion-input>\n\n        </ion-item>\n       \n\n\n      </ion-list>\n      \n      <button ion-button type="submit" block [disabled]="!f.valid">Login</button>\n      \n    </form>\n      \n     \n     \n      <!--<button ion-button block color="facebook">\n      <ion-icon name="logo-facebook"></ion-icon> Login with facebook\n    </button>-->\n    </ion-card-content>\n  </ion-card>\n<button class="bottom" ion-button clear full color="light" (click)="onclick()">Don\'t have an account? Sign Up</button>\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginpagePage);
    return LoginpagePage;
}());

//# sourceMappingURL=loginpage.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the ClosedshiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClosedshiftsPage = (function () {
    function ClosedshiftsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClosedshiftsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClosedshiftsPage');
    };
    ClosedshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closedshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Closed shifts(Closed)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n   <!-- <ion-card color= "light">\n        \n        <ion-card-content>\n            <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="70px" width="15px"/>\n          <ion-card-title>\n            Decathlon <br />\n            Berlin<br />\n            20.02.2018\n            <ion-row>\n                <ion-col text-right>\n                  <button ion-button\n                  outline\n                  (click)="onload()"\n                  >Details</button>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card-title>\n        \n        </ion-card-content >\n      </ion-card>\n\n      <ion-card color = "light">\n          \n          <ion-card-content>\n              <img src="http://oi67.tinypic.com/wiv8xt.jpg" height="100px" width="15px" />\n            <ion-card-title text-right>\n              Decathlon <br />\n              Berlin<br />\n              20.02.2018\n              <ion-row>\n                  <ion-col text-left>\n                    <button ion-button\n                    outline\n                    (click)= "onload()"\n                    >Details</button>\n                  </ion-col>\n                </ion-row>\n              \n              </ion-card-title>\n          \n          </ion-card-content>\n\n        \n        </ion-card>   -->\n        \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ClosedshiftsPage);
    return ClosedshiftsPage;
}());

//# sourceMappingURL=closedshifts.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/closedshifts/closedshifts.module": [
		471,
		6
	],
	"../pages/comingshifts/comingshifts.module": [
		465,
		5
	],
	"../pages/details/details.module": [
		466,
		4
	],
	"../pages/home/home.module": [
		468,
		0
	],
	"../pages/loginpage/loginpage.module": [
		467,
		3
	],
	"../pages/myshifts/myshifts.module": [
		469,
		2
	],
	"../pages/settings/settings.module": [
		470,
		1
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
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up'
        });
        loading.present();
        this.authService.signup(form.value.email, form.value.password)
            .then(function (data) {
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/'\n<ion-header>\n    \n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>SignUp Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <h3 text-center>SignUp Form</h3>\n<form #f= "ngForm" (ngSubmit)="onSignup(f)">\n  <ion-list>\n    <ion-card>\n    <ion-item>\n      <ion-label fixed >FullName</ion-label>\n      <ion-input\n     type="text" \n      name="fullname"\n      ngModel\n      ></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label fixed >Email</ion-label>\n      <ion-input type="email" \n     \n      name="email"\n      ngModel\n      required></ion-input>\n    </ion-item>\n    </ion-card>\n    <ion-card>\n    <ion-item>\n        <ion-label fixed >Username</ion-label>\n      <ion-input type="text" \n      name="username"\n      ngModel\n      ></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n   <ion-item>\n        <ion-label fixed >Password</ion-label>\n        <ion-input \n        type="password"\n         name="password"\n         ngModel \n         required\n         [minlength]="6"\n         ></ion-input>\n\n    </ion-item>\n  </ion-card>\n  </ion-list>\n  <button ion-button block type="submit" [disabled]="!f.valid">SignUp</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

declare var FCMPlugin: any; */
var ProfilePage = (function () {
    /*firestore =  firebase.database().ref('/pushtokens');
     firemsg = firebase.database().ref('/messages');  */
    function ProfilePage(navCtrl, navParams, http, networkprovider
        /*public afd: AngularFireDatabase*/
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.networkprovider = networkprovider;
        /* this.tokensetup().then((token) =>{
           this.storetoken(token);
         });
         this.onNotification();*/
    }
    ProfilePage.prototype.loadJson = function () {
        var _this = this;
        this.http.get('https://sheetsu.com/apis/v1.0bu/0f1648314220')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.users = res.Sheet1;
        }, function (err) {
            alert("failed loading json data");
        });
    };
    ProfilePage.prototype.postRequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            Title: 'Spinning',
            Location: 'wittenberger'
        };
        this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    /*callPostService(name, city){
     let p = this.networkprovider.callPost(name, city)
     .then(data =>{
       console.log("recieved" + JSON.stringify(data.json().data));
     });
    } */
    ProfilePage.prototype.onAddItem = function (form) {
        console.log(form);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n    <ion-title text-center>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)= "onAddItem(f)">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" name="name" ngModel></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>City</ion-label>\n      <ion-input type="text" name="city" ngModel></ion-input>\n    </ion-item>\n  \n  </ion-list>\n\n<button ion-button block >Add Item</button>\n</form>\n\n<button ion-button item-right (click)="postRequest()">Interested</button>\n\n <button ion-button (click)="loadJson()">Load users</button>\n\n \n \n <ion-list>\n    <ion-item *ngFor="let user of users">\n      \n      <h2>{{user.Title}} {{user.Location}}</h2>\n      <br/>\n      <p>{{user.Date}}</p>\n    </ion-item>\n  </ion-list>\n <button ion-button item-right (click)="postRequest()">Interested</button> \n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */]
            /*public afd: AngularFireDatabase*/
        ])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkEngineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(436);
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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftplanningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openshifts_openshifts__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__closedshifts_closedshifts__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myshifts_myshifts__ = __webpack_require__(82);
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
    function ShiftplanningPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.comingshiftspage = __WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__["a" /* ComingshiftsPage */];
    }
    ShiftplanningPage_1 = ShiftplanningPage;
    ShiftplanningPage.prototype.load = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__["a" /* ComingshiftsPage */]);
    };
    ShiftplanningPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__openshifts_openshifts__["a" /* OpenshiftsPage */]);
    };
    ShiftplanningPage.prototype.pageload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__closedshifts_closedshifts__["a" /* ClosedshiftsPage */]);
    };
    ShiftplanningPage.prototype.Onclick = function () {
        this.navCtrl.push(ShiftplanningPage_1);
    };
    ShiftplanningPage.prototype.On = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myshifts_myshifts__["a" /* MyshiftsPage */]);
    };
    ShiftplanningPage = ShiftplanningPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shiftplanning',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/'<!--\n  Generated template for the ShiftplanningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n  \n      <ion-title text-center>Shift Planning</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="background">\n    <ion-list>\n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n           (click)="onload()"\n          >\n            <ion-icon name="megaphone"></ion-icon>\n            Open shifts</button>\n          </ion-card-content> \n        </ion-card>\n      <ion-card color="light">\n        <ion-card-content>\n        <button color="light"\n        ion-item\n        icon-left\n        (click)= "load()">\n        <ion-icon name="megaphone"></ion-icon>\n        Coming shifts</button>\n      </ion-card-content> \n      </ion-card>\n     \n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n            (click)= "pageload()">\n            <ion-icon name="megaphone"></ion-icon>\n            Closed shifts</button>\n          </ion-card-content> \n        </ion-card>\n      \n        \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ShiftplanningPage);
    return ShiftplanningPage;
    var ShiftplanningPage_1;
}());

//# sourceMappingURL=shiftplanning.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOpenshiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shifts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openshifts_openshifts__ = __webpack_require__(126);
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
    function EditOpenshiftPage(navCtrl, navParams, shiftService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shiftService = shiftService;
    }
    EditOpenshiftPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initializeForm();
    };
    EditOpenshiftPage.prototype.onSubmit = function () {
        var value = this.shiftForm.value;
        this.shiftService.addShift(value.Title, value.location, value.Street, value.Day, value.date, value.StartTime, value.EndTime, value.DressCode, value.Signs, value.Otherinfo);
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__openshifts_openshifts__["a" /* OpenshiftsPage */]);
    };
    EditOpenshiftPage.prototype.initializeForm = function () {
        this.shiftForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'Title': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Street': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Day': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'date': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'StartTime': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'EndTime': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'DressCode': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Signs': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'Otherinfo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    EditOpenshiftPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-openshift',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/edit-openshift/edit-openshift.html"*/'<!--\n  Generated template for the EditOpenshiftPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{mode}} Shift</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <form [formGroup]="shiftForm" (ngSubmit)="onSubmit()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input \n        type = "text"\n        formControlName ="Title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Location</ion-label>\n        <ion-input type="text"\n       formControlName="location" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Street</ion-label>\n        <ion-input type="text" formControlName="Street"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Day</ion-label>\n   <ion-select formControlName="Day">\n     <ion-option>Monday</ion-option>\n     <ion-option>Tuesday</ion-option>\n     <ion-option>Wednesday</ion-option>\n     <ion-option>Thursday</ion-option>\n     <ion-option>Friday</ion-option>\n     <ion-option>Saturday</ion-option>\n     <ion-option>Sunday</ion-option>\n   </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Date</ion-label>\n        <ion-input type="date" formControlName="date"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked> StartTime</ion-label>\n        <ion-input type="time" formControlName="StartTime"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked> EndTime</ion-label>\n        <ion-input type="time" formControlName="EndTime"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>DressCode</ion-label>\n        <ion-input type="text" formControlName="DressCode"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Signs</ion-label>\n        <ion-input type="text" formControlName="Signs"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Otherinfo</ion-label>\n        <ion-textarea type="text" formControlName="Otherinfo"></ion-textarea>\n      </ion-item>\n    </ion-list>\n    <button ion-button type="submit" block color="light">{{mode}} Shift</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/edit-openshift/edit-openshift.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_shifts__["a" /* ShiftsService */]])
    ], EditOpenshiftPage);
    return EditOpenshiftPage;
}());

//# sourceMappingURL=edit-openshift.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenShiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shifts__ = __webpack_require__(77);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shifts__["a" /* ShiftsService */]])
    ], OpenShiftPage);
    return OpenShiftPage;
}());

//# sourceMappingURL=open-shift.js.map

/***/ }),

/***/ 255:
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comingshifts_comingshifts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_loginpage_loginpage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_closedshifts_closedshifts__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_openshift_edit_openshift__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_shifts__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_open_shift_open_shift__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_signspin_data_signspin_data__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_network_engine_network_engine__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























/*var config = {
  apiKey: "AIzaSyBGM4oT6gmKxjNpFlUxy0v-yRcWEJk7IIs",
  authDomain: "signspin-app.firebaseapp.com",
  databaseURL: "https://signspin-app.firebaseio.com",
  projectId: "signspin-app",
  storageBucket: "signspin-app.appspot.com",
  messagingSenderId: "483860303310"
};   */
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
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_openshift_edit_openshift__["a" /* EditOpenshiftPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_comingshifts_comingshifts__["a" /* ComingshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_loginpage_loginpage__["a" /* LoginpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_open_shift_open_shift__["a" /* OpenShiftPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_closedshifts_closedshifts__["a" /* ClosedshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__["a" /* MyshiftsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/comingshifts/comingshifts.module#ComingshiftsPageModule', name: 'ComingshiftsPage', segment: 'comingshifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginpage/loginpage.module#LoginpagePageModule', name: 'LoginpagePage', segment: 'loginpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myshifts/myshifts.module#MyshiftsPageModule', name: 'MyshiftsPage', segment: 'myshifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/closedshifts/closedshifts.module#ClosedshiftsPageModule', name: 'ClosedshiftsPage', segment: 'closedshifts', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__["a" /* ShiftplanningPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__["a" /* TimeclockPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_comingshifts_comingshifts__["a" /* ComingshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_openshift_edit_openshift__["a" /* EditOpenshiftPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_open_shift_open_shift__["a" /* OpenShiftPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_loginpage_loginpage__["a" /* LoginpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__["a" /* OpenshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_closedshifts_closedshifts__["a" /* ClosedshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__["a" /* MyshiftsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_shifts__["a" /* ShiftsService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_signspin_data_signspin_data__["a" /* SignspinDataProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myshifts_myshifts__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











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
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyBGM4oT6gmKxjNpFlUxy0v-yRcWEJk7IIs",
            authDomain: "signspin-app.firebaseapp.com",
            databaseURL: "https://signspin-app.firebaseio.com",
            projectId: "signspin-app",
            storageBucket: "signspin-app.appspot.com",
            messagingSenderId: "483860303310"
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
        });
    }
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                Menu\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class="background" >\n        <ion-list class="background">\n            <button\n            ion-item\n            icon-left\n            (click)= "onLoad(MyshiftsPage)"\n            *ngIf="isAuthenticated">\n           \n            <ion-icon name="book"></ion-icon>\n            MyShifts</button>\n            <button\n            ion-item\n            icon-left\n            (click)= "onLogout()"\n            *ngIf="isAuthenticated">\n            <ion-icon name="log-out"></ion-icon>\n\n            LogOut</button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu> \n<ion-nav [root]="rootPage" #nav></ion-nav>\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignspinDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(207);
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
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shift__ = __webpack_require__(437);

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

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
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
    function MyshiftsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyshiftsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyshiftsPage');
    };
    MyshiftsPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    MyshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/'<!--\n  Generated template for the MyshiftsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Myshifts</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background  ">\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MyshiftsPage);
    return MyshiftsPage;
}());

//# sourceMappingURL=myshifts.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map