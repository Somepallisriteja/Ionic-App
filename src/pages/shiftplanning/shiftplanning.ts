import { Component } from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { OpenshiftsPage } from '../openshifts/openshifts';
import { ClosedshiftsPage } from '../closedshifts/closedshifts';









@Component({
  selector: 'page-shiftplanning',
  templateUrl: 'shiftplanning.html',
  
})
export class ShiftplanningPage {
 
  s

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController
 ){

  }

 

   onload(){
     this.navCtrl.push(OpenshiftsPage);
   }
   
   
  pageload(){
     this.navCtrl.push(ClosedshiftsPage);
   }
 
  

  }


