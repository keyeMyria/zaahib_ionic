import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationModalPage } from './location-modal';
import { translator } from '../../../providers/shared/global';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    LocationModalPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LocationModalPage),
    translator
  ],
})
export class LocationModalPageModule {}
 