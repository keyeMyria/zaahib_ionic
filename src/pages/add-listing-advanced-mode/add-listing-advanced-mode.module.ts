import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { AddListingAdvancedModePage } from './add-listing-advanced-mode';
import { translator } from '../../providers/shared/global';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
  declarations: [
  ],
  imports: [
    //IonicPageModule.forChild(AddListingAdvancedModePage), 
    ComponentsModule,
    translator
  ],
})
export class AddListingAdvancedModePageModule {}
