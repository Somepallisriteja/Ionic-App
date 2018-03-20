import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { ShiftplanningPage } from '../shiftplanning/shiftplanning';
import { TimeclockPage } from '../timeclock/timeclock';


@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
  <ion-tab [root]="profilePage" tabTitle="Profile" tabIcon ="person" ></ion-tab>
  <ion-tab [root]="shiftPage" tabTitle="ShiftPlanning" tabIcon ="browsers" ></ion-tab>
  <ion-tab [root]="timePage" tabTitle="TimeClock" tabIcon ="timer" ></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
profilePage = ProfilePage;
shiftPage = ShiftplanningPage;
timePage = TimeclockPage;





}
