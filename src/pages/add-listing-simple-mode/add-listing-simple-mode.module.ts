import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddListingSimpleModePage } from './add-listing-simple-mode';

@NgModule({
  declarations: [
    AddListingSimpleModePage,
  ],
  imports: [
    IonicPageModule.forChild(AddListingSimpleModePage),
  ],
})
export class AddListingSimpleModePageModule {}
