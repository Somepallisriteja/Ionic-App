import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { EditOpenshiftPage } from '../edit-openshift/edit-openshift';
import { shift } from '../../models/shift';
import { ShiftsService } from '../../services/shifts';
import { OpenShiftPage } from '../open-shift/open-shift';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  Headers, RequestOptions } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';




@Component({
  selector: 'page-openshifts',
  templateUrl: 'openshifts.html',
})
export class OpenshiftsPage {
  openShifts: shift[];
  message: any;
  userEmail: any;

  constructor(private navCtrl: NavController,
    private shiftService: ShiftsService,
    public http: Http,
    private loadingCtrl: LoadingController,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth) { }

  ionViewWillEnter() {
    this.openShifts = this.shiftService.getShifts();
    
  }

  getCurrentUser() {
    this.afAuth.authState.subscribe(data => {
      console.log('A informacao de data ' , data);
      this.userEmail = data.email;
      console.log(this.userEmail);
    });
  }  
  
  /*onNewOpenShift() {
    this.navCtrl.push(EditOpenshiftPage, { mode: 'New' });
  }
  onLoadShift(openShift: shift, index: number) {
    this.navCtrl.push(OpenShiftPage, { openShift: openShift, index: index });
    
  }  */
  /*Loading data from google sheets */
  users: any;
  ID: "";

  

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading open shifts'
    
      });
      loading.present();
      
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
  onInterested(user){
    console.log(user);
    
    const actionSheet = this.actionSheetController.create({ //Boiler Plate Code for Action Sheet Controller; Same template used for VIEW Controller and ALERT Controller
      title: 'Here are your options..!!',
      buttons: [
        {
          text: 'Interested !!',
          handler: ()=> {
            
            //
            //this.navCtrl.push(EditOpenshiftPage, user);
            this.messageBox(user);
            
            const loading = this.loadingCtrl.create({
              content: 'Sending your request'
          
            });
            loading.present();
           
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
messageBox(user){
// this.createAlert(user);
this.createAlert(user).present();
}
  //

  private createAlert(user){
    // console.log('alert',user);
    return this.alertCtrl.create({
     title: 'Message',
     inputs: [
       {
       
       placeholder: 'Message',
       type: 'ion-textarea',
       
      
       }
      ],



      buttons: [
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data =>{
            /*if(data.trim() == '' || data == null){
             const toast = this.toastCtrl.create({
               message:'Please enter a valid value',
               duration: 1500,
               position: 'bottom'

             })
            
            
             return;
            }*/
            let headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json' );
            let options = new RequestOptions({ headers: headers });
            this.message = data;
            
            console.log('in add',data, user);
            let postParams = user;
            let email= this.userEmail;
            
            postParams.message = data;
            
           
              this.http.post("https://sheetsu.com/apis/v1.0su/0ba4069455bb/sheets/IncomingMessages", JSON.stringify(postParams, email), options)
              .subscribe(data => {
                console.log(data);
               },
               
                error => {
                console.log(error);// Error getting the data
              });
          
          }
        }
      ]
   })
 }


}
