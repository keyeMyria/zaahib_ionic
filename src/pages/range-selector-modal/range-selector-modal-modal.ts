import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeSelectorModalPage } from './range-selector-modal';

@NgModule({
  declarations: [
    RangeSelectorModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RangeSelectorModalPage),
  ],
})
export class RangeSelectorModalPageModule {}
