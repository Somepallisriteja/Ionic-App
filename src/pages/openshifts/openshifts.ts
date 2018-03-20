import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { EditOpenshiftPage } from '../edit-openshift/edit-openshift';
import { shift } from '../../models/shift';
import { ShiftsService } from '../../services/shifts';
import { OpenShiftPage } from '../open-shift/open-shift';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-openshifts',
  templateUrl: 'openshifts.html',
})
export class OpenshiftsPage {
  openShifts: shift[];

  constructor(private navCtrl: NavController,
    private shiftService: ShiftsService,
    public http: Http,
    private loadingCtrl: LoadingController,
    private actionSheetController: ActionSheetController) { }

  ionViewWillEnter() {
    this.openShifts = this.shiftService.getShifts();
    
  }
  
  onNewOpenShift() {
    this.navCtrl.push(EditOpenshiftPage, { mode: 'New' });
  }
  onLoadShift(openShift: shift, index: number) {
    this.navCtrl.push(OpenShiftPage, { openShift: openShift, index: index });
    
  }
  /*Loading data from google sheets */
  users: any;

  onloadJson(){
    const loading = this.loadingCtrl.create({
      content: 'Loading open shifts'
  
    });
    loading.present();
    
    this.http.get('https://script.googleusercontent.com/macros/echo?user_content_key=PohyX7kTKOInERuTH6a5i8f-FMmBbhIm4XO-33E5CZlzVxcQqCXdE1DAwakKF6intSgzimmcIZE4tsSGg-OdMmy4B8NoVh-BOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp7VtjYS6BG3NcwNOxiBwrD95fAxDfxvwqqzBHjvr-3_85BPy4_3_gBux4Rx99sEiCsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx')
    .map(res => res.json())
    .subscribe( res=>{
      loading.dismiss();
      this.users = res.Sheet1;
    },
    (err) =>{
      
    alert("failed loading json data");
    });
    
  }
  onInterested(){
    const actionSheet = this.actionSheetController.create({ //Boiler Plate Code for Action Sheet Controller; Same template used for VIEW Controller and ALERT Controller
      title: 'Here are your options..!!',
      buttons: [
        {
          text: 'Interested !!',
          handler: ()=> {
            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json' );
            const loading = this.loadingCtrl.create({
              content: 'Sending your request'
          
            });
            loading.present();
            let options = new RequestOptions({ headers: headers });
            let postParams = {
              Request: 'Hi Philipp, I am Interested in doing this job',
              Others: 'Nothing'
              
            }
            
            this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(postParams), options)
            .subscribe(data => {
              console.log(data);
              
             },
             
              error => {
              console.log(error);// Error getting the data
            });
            loading.dismiss();
          }
        },
        {
          text:'Not Interested',
          role: 'destructive', //Makes the text red and gives a destructive effect
          handler: ()=>{
            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'     // Handler runs first when you click a button but here we did not mention any handler. so it gets cancelled automatically
                             
        }
        
      ]
  });
  actionSheet.present();
  }


}
