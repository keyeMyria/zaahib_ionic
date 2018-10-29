import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationAddressSectionPage } from './location-address-section';

@NgModule({
  declarations: [
    LocationAddressSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationAddressSectionPage),
  ],
})
export class LocationAddressSectionPageModule {}
