import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { ShiftplanningPage } from '../shiftplanning/shiftplanning';
import { MyshiftsPage } from '../myshifts/myshifts';



@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
  <ion-tab [root]="profilePage" tabTitle="Profil" tabIcon ="person" ></ion-tab>
  <ion-tab [root]="shiftPage" tabTitle="Einsätze" tabIcon ="browsers" ></ion-tab>
  
  <ion-tab [root]="myShiftPage" tabTitle="Meine Einsätze" tabIcon ="book" ></ion-tab>

  </ion-tabs>
  `
})
export class TabsPage {
profilePage = ProfilePage;
shiftPage = ShiftplanningPage;
myShiftPage = MyshiftsPage;





}
