import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenShiftPage } from './open-shift';

@NgModule({
  declarations: [
    OpenShiftPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenShiftPage),
  ],
})
export class OpenShiftPageModule {}
