import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComingshiftsPage } from './comingshifts';

@NgModule({
  declarations: [
    ComingshiftsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComingshiftsPage),
  ],
})
export class ComingshiftsPageModule {}
