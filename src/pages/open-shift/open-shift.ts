import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { shift } from '../../models/shift';
import { ShiftsService } from '../../services/shifts';





@Component({
  selector: 'page-open-shift',
  templateUrl: 'open-shift.html',
})
export class OpenShiftPage implements OnInit {
  openShift : shift;
  index: number;
  
  
  

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public shiftService: ShiftsService
             ) {
  }
 ngOnInit(){
   this.openShift = this.navParams.get('openShift');
   this.index= this.navParams.get('index');
  
 }
 onAddMyShift(){
   
  

  }

 onRemoveMyShift(){
   
 }
 isInterested(){

 }

}
