import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ComingshiftsPage } from '../comingshifts/comingshifts';
import { OpenshiftsPage } from '../openshifts/openshifts';
import { ClosedshiftsPage } from '../closedshifts/closedshifts';
import { MyshiftsPage } from '../myshifts/myshifts';







@Component({
  selector: 'page-shiftplanning',
  templateUrl: 'shiftplanning.html',
  
})
export class ShiftplanningPage {
  comingshiftspage = ComingshiftsPage;

  constructor(public navCtrl: NavController,
 ){

  }

   load(){
     this.navCtrl.push(ComingshiftsPage);
   }
   
   onload(){
    

      this.navCtrl.push(OpenshiftsPage);
    }
     

   
 
   pageload(){
     this.navCtrl.push(ClosedshiftsPage);
   }
   Onclick(){
     this.navCtrl.push(ShiftplanningPage);
   }
   On(){
     this.navCtrl.push(MyshiftsPage);
   }
  

  }


