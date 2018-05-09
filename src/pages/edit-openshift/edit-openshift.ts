import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShiftsService } from '../../services/shifts';
import { OpenshiftsPage } from '../openshifts/openshifts';
import { Http } from '@angular/http';



@Component({
  selector: 'page-edit-openshift',
  templateUrl: 'edit-openshift.html',
})
export class EditOpenshiftPage implements OnInit {
 

  mode: 'New';
  shiftForm: FormGroup;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private shiftService:ShiftsService,
     public http : Http) {
     
  }
 
ngOnInit(){
  this.mode = this.navParams.get('mode');
  this.initializeForm();
}
onSubmit(){
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  const value = this.shiftForm.value;
  this.shiftService.addShift(value.Title,value.location, value.Street,value.Day,value.date,value.StartTime,value.EndTime,value.DressCode,value.Signs,value.Otherinfo);
  this.navCtrl.popTo(OpenshiftsPage);
  this.http.post("https://sheetsu.com/apis/v1.0bu/0f1648314220", JSON.stringify(value))
  .subscribe(data => {
    console.log(data);
    
   },
   
    error => {
    console.log(error);// Error getting the data
  });

}

 
private initializeForm(){
  this.shiftForm = new FormGroup({
     'location':new FormControl(null, Validators.required),
     'Street': new FormControl(null, Validators.required),
     'Day': new FormControl(null, Validators.required),
     'date': new FormControl(null, Validators.required),
     'Otherinfo': new FormControl(null, Validators.required)

  });
}
}
