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
  
  /*onNewOpenShift() {
    this.navCtrl.push(EditOpenshiftPage, { mode: 'New' });
  }
  onLoadShift(openShift: shift, index: number) {
    this.navCtrl.push(OpenShiftPage, { openShift: openShift, index: index });
    
  }  */
  /*Loading data from google sheets */
  users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading open shifts'
    
      });
      loading.present();
      
      // search?Kunde=JOKEEvents-Berlin-DS-SS
      this.http.get("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/Open")
      .map(res => res.json())
      .subscribe( res=>{
      loading.dismiss();
        
        this.users = res;
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


            this.navCtrl.push(EditOpenshiftPage);
            
            
            const loading = this.loadingCtrl.create({
              content: 'Sending your request'
          
            });
            loading.present();
            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json' );
            let options = new RequestOptions({ headers: headers });
            let postParams = {
              ServiceAddress: 'Hi Philipp, I am Interested in doing this job',
              Message: 'Nothing'
              
            }
            
            this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455sbb/sheets/IncomingMessages", JSON.stringify(postParams), options)
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
