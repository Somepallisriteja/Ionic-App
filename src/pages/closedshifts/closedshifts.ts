import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,  ActionSheetController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {  Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the ClosedshiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-closedshifts',
  templateUrl: 'closedshifts.html',
})
export class ClosedshiftsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              public http : Http,
              private actionSheetController: ActionSheetController) {
  }

    /*Loading data from google sheets */
    users: any;

    onloadJson(){
      const loading = this.loadingCtrl.create({
        content: 'Loading closed shifts'
    
      });
      loading.present();
      
      this.http.get('https://sheetsu.com/apis/v1.0bu/0f1648314220')
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
