import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterLocationModalPage } from './filter-location-modal';

@NgModule({
  declarations: [
    FilterLocationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterLocationModalPage),
  ],
})
export class FilterLocationModalPageModule {}
