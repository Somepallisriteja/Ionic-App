import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosedshiftsPage } from './closedshifts';

@NgModule({
  declarations: [
    ClosedshiftsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosedshiftsPage),
  ],
})
export class ClosedshiftsPageModule {}
