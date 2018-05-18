import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { ShiftplanningPage } from '../shiftplanning/shiftplanning';
import { TimeclockPage } from '../timeclock/timeclock';
import { MyshiftsPage } from '../myshifts/myshifts';



@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
  <ion-tab [root]="profilePage" tabTitle="Profile" tabIcon ="person" ></ion-tab>
  <ion-tab [root]="shiftPage" tabTitle="ShiftPlanning" tabIcon ="browsers" ></ion-tab>
  
  <ion-tab [root]="myShiftPage" tabTitle="MyShifts" tabIcon ="book" ></ion-tab>

  </ion-tabs>
  `
})
export class TabsPage {
profilePage = ProfilePage;
shiftPage = ShiftplanningPage;
timePage = TimeclockPage;
myShiftPage = MyshiftsPage;





}
