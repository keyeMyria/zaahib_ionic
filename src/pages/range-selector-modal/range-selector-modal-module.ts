import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeSelectorModalPage } from './range-selector-modal';
import { translator } from '../../providers/shared/global';

@NgModule({
  declarations: [
    RangeSelectorModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RangeSelectorModalPage),translator
  ],
})
export class RangeSelectorModalPageModule {}
