import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeclockPage } from './timeclock';

@NgModule({
  declarations: [
    TimeclockPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeclockPage),
  ],
})
export class TimeclockPageModule {}
