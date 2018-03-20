import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShiftsService } from '../../services/shifts';
import { OpenshiftsPage } from '../openshifts/openshifts';



@Component({
  selector: 'page-edit-openshift',
  templateUrl: 'edit-openshift.html',
})
export class EditOpenshiftPage implements OnInit {
  mode: 'New';
  shiftForm: FormGroup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private shiftService:ShiftsService) {
  }
ngOnInit(){
  this.mode = this.navParams.get('mode');
  this.initializeForm();
}
onSubmit(){
  const value = this.shiftForm.value;
  this.shiftService.addShift(value.Title,value.location, value.Street,value.Day,value.date,value.StartTime,value.EndTime,value.DressCode,value.Signs,value.Otherinfo);
  this.navCtrl.popTo(OpenshiftsPage);
}

 
private initializeForm(){
  this.shiftForm = new FormGroup({
     'Title': new FormControl(null, Validators.required),
     'location':new FormControl(null, Validators.required),
     'Street': new FormControl(null, Validators.required),
     'Day': new FormControl(null, Validators.required),
     'date': new FormControl(null, Validators.required),
     'StartTime': new FormControl(null, Validators.required),
     'EndTime': new FormControl(null, Validators.required),
     'DressCode': new FormControl(null, Validators.required),
     'Signs': new FormControl(null, Validators.required),
     'Otherinfo': new FormControl(null, Validators.required)

  });
}
}
