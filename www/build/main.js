webpackJsonp([7],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(69);
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
        var url = "https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users/search?email=" + this.userEmail;
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
            subTitle: 'Currently you have no shifts scheduled:)',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    MyshiftsPage.prototype.defaultMessage = function () {
    };
    MyshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/'<!--\n  Generated template for the MyshiftsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MyShifts</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background  ">\n\n<button ion-button block (click)="onloadJson()">Click here for your shifts</button>\n\n<ion-card>\n\n\n</ion-card>\n\n  <ion-card *ngFor= "let user of users; let i = index">\n        <ion-card-title text-center>\n          Spinning Offer\n        </ion-card-title>\n        <ion-card-header text-left>\n            <p> Date:    {{user.Datum }}</p>\n            <p>Kunde: {{ user.Kunde}}</p>\n            <p>Address:{{ user.ServiceAddress}}</p>\n    \n            <p>Start:   {{user.SchStart}}</p>\n            <p>End:   {{user.SchEnd}}</p>\n            \n           \n        </ion-card-header>\n        \n      \n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/myshifts/myshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyshiftsPage);
    return MyshiftsPage;
}());

//# sourceMappingURL=myshifts.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shiftplanning_shiftplanning__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeclock_timeclock__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myshifts_myshifts__ = __webpack_require__(114);
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

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shift__ = __webpack_require__(688);

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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(382);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkEngineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(604);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shifts__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(689);
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
    function OpenshiftsPage(navCtrl, shiftService, http, loadingCtrl, actionSheetController, alertCtrl, toastCtrl, afAuth, fcm) {
        this.navCtrl = navCtrl;
        this.shiftService = shiftService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.fcm = fcm;
    }
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
                        var email = _this.userEmail;
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
            selector: 'page-openshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/'\n<ion-header>\n  <ion-navbar>\n \n    <ion-buttons end>\n      <button ion-button icon-only (click)="onloadJson()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n     </ion-buttons>\n    <ion-title>Open Shifts</ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n\n\n<ion-content padding>\n  <button ion-button block (click)="onloadJson()">Click me for open shifts</button>\n  <!--<ion-card *ngFor= "let openShift of openShifts; let i = index">\n    <ion-card-title text-center>\n      {{openShift.Title}}\n    </ion-card-title>\n    <ion-card-header text-center>\n        <p> Date: {{openShift.date}}</p>\n        <p>Location:{{ openShift.location}}</p>\n        <p>Timing: {{openShift.StartTime}} to {{openShift.EndTime}}</p>\n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        small\n        clear\n        (click)="onLoadShift(openShift, i)">Details</button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>  -->\n\n  <ion-card *ngFor= "let user of users; let i = index">\n    <ion-card-title text-center>\n      Spinning Offer\n    </ion-card-title>\n    <ion-card-header text-left>\n\n        <p>   #{{user.ID}}</p>\n        <p> Date:    {{user.Datum }}</p>\n        <p>Kunde: {{ user.Kunde}}</p>\n        <p>Address:{{ user.ServiceAddress}}</p>\n\n        <p>Start:   {{user.SchStart}}</p>\n        <p>End:   {{user.SchEnd}}</p>\n        \n       \n    </ion-card-header>\n    <ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        large\n        clear\n        (click)= "onInterested(user)"\n        ><ion-icon name="eye" icon-only></ion-icon></button>\n        \n      </ion-col>\n    </ion-row>\n  \n  \n  </ion-card>\n  \n  \n  \n   \n  \n    </ion-content>\n  \n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/openshifts/openshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_shifts__["a" /* ShiftsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */]])
    ], OpenshiftsPage);
    return OpenshiftsPage;
}());

//# sourceMappingURL=openshifts.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function ClosedshiftsPage(navCtrl, navParams, loadingCtrl, http, actionSheetController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetController = actionSheetController;
    }
    ClosedshiftsPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading closed shifts'
        });
        loading.present();
        this.http.get("https://script.googleusercontent.com/macros/echo?user_content_key=9BY8cRw0av1YxElZpdQjR_pwsW_8mqVxkaxEibSuknwU2-pdUws1ABzjcFGznhqyT2LoiNhaTvNrUJE--tyA-7Vw3BqXKM0LOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp-PZoSi6C_ZuxnbWVsbXJI5608_x34Ih44_gExCCNluhQBrZiU1rCAxgJ5uR8vJ3DQLy2V_-Rv1u92hmPuVvR9E&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            _this.users = res.Planed;
        }, function (err) {
            alert("failed loading json data");
        });
    };
    ClosedshiftsPage.prototype.onInterested = function () {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'Here are your options..!!',
            buttons: [
                {
                    text: 'Interested !!',
                    handler: function () {
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var loading = _this.loadingCtrl.create({
                            content: 'Sending your request'
                        });
                        loading.present();
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
    ClosedshiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-closedshifts',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Closed shifts(Closed)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="onloadJson()">Click me for open shifts</button>\n\n\n  <ion-card *ngFor= "let user of users; let i = index">\n    <ion-card-title text-center>\n      Spinning Offer\n    </ion-card-title>\n    <ion-card-header text-left>\n        <p>Date:    {{user.Datum}}</p>\n        <p>Location: {{ user.LocationName}}</p>\n        <p>Street:   {{ user.ServiceAddress}}</p>\n        <p>Employee:    {{user.EmployeeName}}</p>\n      \n       \n    </ion-card-header>\n    <!--<ion-row>\n      <ion-col text-right>\n        <button\n        ion-button\n        large\n        clear\n        (click)= "onInterested()"\n        ><ion-icon name="eye" icon-only></ion-icon></button>\n        \n      </ion-col>\n    </ion-row> -->\n  \n  \n  </ion-card>\n  \n  \n  \n   \n  \n    </ion-content>\n  \n  '/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/closedshifts/closedshifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ClosedshiftsPage);
    return ClosedshiftsPage;
}());

//# sourceMappingURL=closedshifts.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingshiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(250);
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

/***/ 250:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(138);
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
            selector: 'page-loginpage',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/'<ion-header>\n<ion-navbar color="background">\n    \n</ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n\n\n <facebook-login></facebook-login>\n\n <!--\n  <p>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="50px" width="170px" >\n      </p>  \n  <ion-card>\n    <ion-card-header text-center>\n      Login Form\n    </ion-card-header>\n    <ion-card-content>\n      <form #f= "ngForm" (ngSubmit)="onSignin(f)">\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" name="email" placeholder="email" ngModel required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="password" placeholder="Password" name="password" ngModel required></ion-input>\n\n        </ion-item>\n       \n\n\n      </ion-list>\n      \n      <button ion-button type="submit" block [disabled]="!f.valid">Login</button>\n      \n    </form>\n      \n     \n     \n      \n    </ion-card-content>\n  </ion-card>\n<button class="bottom" ion-button clear full color="light" (click)="onclick()">Don\'t have an account? Sign Up</button> \n</ion-content>   -->\n\n\n\n\n\n\n\n\n\n<!--<button ion-button block color="facebook">\n      <ion-icon name="logo-facebook"></ion-icon> Login with facebook\n    </button>-->'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/loginpage/loginpage.html"*/,
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

/***/ 285:
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
webpackEmptyAsyncContext.id = 285;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/closedshifts/closedshifts.module": [
		803,
		6
	],
	"../pages/comingshifts/comingshifts.module": [
		804,
		5
	],
	"../pages/details/details.module": [
		805,
		4
	],
	"../pages/home/home.module": [
		806,
		3
	],
	"../pages/loginpage/loginpage.module": [
		807,
		2
	],
	"../pages/myshifts/myshifts.module": [
		808,
		1
	],
	"../pages/settings/settings.module": [
		809,
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
webpackAsyncContext.id = 328;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(195);
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
import firebase from 'firebase';
declare let FCMPlugin;  */
var ProfilePage = (function () {
    /*firestore =  firebase.database().ref('/pushtokens');
     firemsg = firebase.database().ref('/messages');  */
    function ProfilePage(navCtrl, navParams, http, networkprovider, afAuth, afDatabase, toast
        /* private platform: Platform
         public afd: AngularFireDatabase*/
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.networkprovider = networkprovider;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
    }
    ProfilePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.getCurrentUser();
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome to SignSpin Application",
                    duration: 3000
                }).present();
                /*this.profileData = this.afDatabase.object(`Profile/${data.uid}`).valueChanges(); */
            }
        });
    };
    ProfilePage.prototype.getCurrentUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log('A informacao de data ', data);
            _this.userEmail = data.email;
            _this.displayname = data.displayName;
            console.log(_this.displayname);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons end>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n\n    <ion-title text-center>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  \n<!--<p>Username: {{(profileData | async)?.username}}</p>\n<p>Firstname: {{(profileData | async)?.firstname}}</p>\n<p>Lastname: {{(profileData | async)?.lastname}}</p>  -->\n<h5> Hi {{userEmail}} </h5>\n<h5>Welcome to SignSpin Application</h5>\n<p>for more information <a href="http://www.signspin.de/">Click here</a></p>\n\n\n\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]
            /* private platform: Platform
             public afd: AngularFireDatabase*/
        ])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftplanningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openshifts_openshifts__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__closedshifts_closedshifts__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myshifts_myshifts__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(37);
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
    function ShiftplanningPage(navCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.comingshiftspage = __WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__["a" /* ComingshiftsPage */];
        this.openshiftspage = __WEBPACK_IMPORTED_MODULE_3__openshifts_openshifts__["a" /* OpenshiftsPage */];
    }
    ShiftplanningPage_1 = ShiftplanningPage;
    ShiftplanningPage.prototype.load = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comingshifts_comingshifts__["a" /* ComingshiftsPage */]);
    };
    ShiftplanningPage.prototype.onload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__openshifts_openshifts__["a" /* OpenshiftsPage */]);
    };
    ShiftplanningPage.prototype.onloadJson = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading open shifts'
        });
        loading.present();
        //this.navCtrl.isTransitioning(OpenshiftsPage)
        this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Open")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            loading.dismiss();
            _this.users = res;
        }, function (err) {
            alert("failed loading json data");
        });
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
            selector: 'page-shiftplanning',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/'<!--\n  Generated template for the ShiftplanningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <img src="http://oi68.tinypic.com/2eupsb5.jpg" height="30px" width="90px">\n  \n      <ion-title text-center>Shift Planning</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="background">\n    <ion-list>\n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n           (click)="onload()"\n          >\n            <ion-icon name="megaphone"></ion-icon>\n            Open shifts</button>\n          </ion-card-content> \n        </ion-card>\n   \n     \n        <ion-card color="light">\n            <ion-card-content>\n            <button color="light"\n            ion-item\n            icon-left\n            (click)= "pageload()">\n            <ion-icon name="megaphone"></ion-icon>\n            Closed shifts</button>\n          </ion-card-content> \n        </ion-card>\n           <ion-card color="light">\n        <ion-card-content>\n        <button color="light"\n        ion-item\n        icon-left\n        (click)= "load()">\n        <ion-icon name="megaphone"></ion-icon>\n        Coming shifts</button>\n      </ion-card-content> \n      </ion-card> \n      \n        \n    </ion-list>\n\n    \n    <!--<ion-card *ngFor= "let openShift of openShifts; let i = index">\n      <ion-card-title text-center>\n        {{openShift.Title}}\n      </ion-card-title>\n      <ion-card-header text-center>\n          <p> Date: {{openShift.date}}</p>\n          <p>Location:{{ openShift.location}}</p>\n          <p>Timing: {{openShift.StartTime}} to {{openShift.EndTime}}</p>\n      </ion-card-header>\n      <ion-row>\n        <ion-col text-right>\n          <button\n          ion-button\n          small\n          clear\n          (click)="onLoadShift(openShift, i)">Details</button>\n          \n        </ion-col>\n      </ion-row>\n    \n    \n    </ion-card>  -->\n  \n    <ion-card *ngFor= "let user of users; let i = index">\n      <ion-card-title text-center>\n        Spinning Offer\n      </ion-card-title>\n      <ion-card-header text-left>\n          <p> Date:    {{user.Datum }}</p>\n          <p>Kunde: {{ user.Kunde}}</p>\n          <p>Address:{{ user.ServiceAddress}}</p>\n  \n          <p>Start:   {{user.SchStart}}</p>\n          <p>End:   {{user.SchEnd}}</p>\n          \n         \n      </ion-card-header>\n      <ion-row>\n        <ion-col text-right>\n          <button\n          ion-button\n          large\n          clear\n          \n          ><ion-icon name="eye" icon-only></ion-icon></button>\n          \n        </ion-col>\n      </ion-row>\n    \n    \n    </ion-card>\n    \n    \n    \n     \n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/shiftplanning/shiftplanning.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], ShiftplanningPage);
    return ShiftplanningPage;
    var ShiftplanningPage_1;
}());

//# sourceMappingURL=shiftplanning.js.map

/***/ }),

/***/ 380:
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

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
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
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Users", JSON.stringify(form.value), options)
            .subscribe(function (data) {
            console.log(data);
        });
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/'\n<ion-header>\n    \n  <ion-navbar>\n      <ion-buttons end>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>SignUp Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n\n  <h3 text-center>SignUp Form</h3>\n<form #f= "ngForm" (ngSubmit)="onSignup(f)">\n  <ion-list>\n    <ion-card>\n    <ion-item>\n      <ion-label fixed >FullName</ion-label>\n      <ion-input\n     type="text" \n      name="displayName"\n      ngModel\n      required\n      ></ion-input>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label fixed >Email</ion-label>\n      <ion-input type="email" \n     \n      name="email"\n      ngModel\n      required></ion-input>\n    </ion-item>\n    </ion-card>\n    \n  <ion-card>\n   <ion-item>\n        <ion-label fixed >Password</ion-label>\n        <ion-input \n        type="password"\n         name="password"\n         ngModel \n         required\n         [minlength]="6"\n         ></ion-input>\n\n    </ion-item>\n  </ion-card>\n  </ion-list>\n  <button ion-button block type="submit" [disabled]="!f.valid">SignUp</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AuthProvider = (function () {
    function AuthProvider(http, afAuth, afs, facebook, platform) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.afs = afs;
        this.facebook = facebook;
        this.platform = platform;
        console.log('Hello AuthProvider Provider');
        this.user = this.afAuth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["switchMap"])(function (user) {
            console.log(user);
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
            }
        }));
    }
    //Current user as promise. Useful for one off operations
    AuthProvider.prototype.getPresentUser = function () {
        return this.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["take"])(1)).toPromise();
    };
    AuthProvider.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.nativeFacebookLogin()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.webFacebookLogin()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://www.youtube.com/'
        };
        return userRef.set(data, { merge: true });
    };
    AuthProvider.prototype.nativeFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, facebookCredential, firebaseUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.facebook.login(['email', 'public_profile'])];
                    case 1:
                        response = _a.sent();
                        facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(response.authResponse.accessToken);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(facebookCredential)];
                    case 2:
                        firebaseUser = _a.sent();
                        return [4 /*yield*/, this.updateUserData(firebaseUser)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.webFacebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Provider, credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        Provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(Provider)];
                    case 1:
                        credential = _a.sent();
                        return [4 /*yield*/, this.updateUserData(credential.user)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* Platform */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_network_engine_network_engine__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(136);
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
    function HomePage(navCtrl, navParams, networkprovider, afAuth, afDatabase
        /* private platform: Platform
         public afd: AngularFireDatabase*/
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.networkprovider = networkprovider;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.profile = {};
        /* this.tokensetup().then((token) =>{
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
    } */
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]
            /* private platform: Platform
             public afd: AngularFireDatabase*/
        ])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shiftplanning_shiftplanning__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_timeclock_timeclock__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comingshifts_comingshifts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_openshifts_openshifts__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_loginpage_loginpage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_closedshifts_closedshifts__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_openshift_edit_openshift__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_shifts__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_open_shift_open_shift__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_signspin_data_signspin_data__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_network_engine_network_engine__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_firebase__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_storage__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_home__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_auth_auth__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_facebook_login_facebook_login__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var config = {
    apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
    authDomain: "myproject-2c6c2.firebaseapp.com",
    databaseURL: "https://myproject-2c6c2.firebaseio.com",
    projectId: "myproject-2c6c2",
    storageBucket: "myproject-2c6c2.appspot.com",
    messagingSenderId: "468750777039"
};
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
                __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__["a" /* MyshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_36__components_facebook_login_facebook_login__["a" /* FacebookLoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
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
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__["b" /* AngularFireDatabaseModule */]
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
                __WEBPACK_IMPORTED_MODULE_17__pages_myshifts_myshifts__["a" /* MyshiftsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_shifts__["a" /* ShiftsService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_signspin_data_signspin_data__["a" /* SignspinDataProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_network_engine_network_engine__["a" /* NetworkEngineProvider */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_35__providers_auth_auth__["a" /* AuthProvider */]
                /*FcmProvider */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 688:
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

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myshifts_myshifts__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(437);
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

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, authService, push, auth) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.push = push;
        this.rootPage = null;
        this.MyshiftsPage = __WEBPACK_IMPORTED_MODULE_6__pages_myshifts_myshifts__["a" /* MyshiftsPage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
            authDomain: "myproject-2c6c2.firebaseapp.com",
            databaseURL: "https://myproject-2c6c2.firebaseio.com",
            projectId: "myproject-2c6c2",
            storageBucket: "",
            messagingSenderId: "468750777039"
        });
        platform.ready().then(function () {
            auth.getPresentUser()
                .then(function (user) {
                if (user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_loginpage_loginpage__["a" /* LoginpagePage */];
                }
                statusBar.styleDefault();
                splashScreen.hide();
            });
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
        /* firebase.auth().onAuthStateChanged(user=> {
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
           this.pushSetup();
         });
       }
       pushSetup(){
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
       }
       onLoad(page: any){
        this.nav.setRoot(page);
        this.menuCtrl.close();
       }
       onLogout(){
         this.authService.logout();
         this.menuCtrl.close();
         this.nav.setRoot(LoginpagePage);
       }   */
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>\n                Menu\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class="background" >\n        <ion-list class="background">\n           <!-- <button\n            ion-item\n            icon-left\n            (click)= "onLoad(MyshiftsPage)"\n            *ngIf="isAuthenticated">\n           \n            <ion-icon name="book"></ion-icon>\n            MyShifts</button>   -->\n            <button\n            ion-item\n            icon-left\n            (click)= "onLogout()"\n            *ngIf="isAuthenticated">\n            <ion-icon name="log-out"></ion-icon>\n\n            LogOut</button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu> \n<ion-nav [root]="rootPage" #nav></ion-nav>\n\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOpenshiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shifts__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openshifts_openshifts__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(69);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_shifts__["a" /* ShiftsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], EditOpenshiftPage);
    return EditOpenshiftPage;
}());

//# sourceMappingURL=edit-openshift.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenShiftPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shifts__ = __webpack_require__(137);
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

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignspinDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
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

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
    }
    FacebookLoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.facebookLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FacebookLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'facebook-login',template:/*ion-inline-start:"/Users/sritejasomepalli/Ionic-App/src/components/facebook-login/facebook-login.html"*/'\n<button ion-button icon-left full (tap)= "login()">\n\n\nLogin with facebook\n\n</button>\n'/*ion-inline-end:"/Users/sritejasomepalli/Ionic-App/src/components/facebook-login/facebook-login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());

//# sourceMappingURL=facebook-login.js.map

/***/ })

},[455]);
//# sourceMappingURL=main.js.map