
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortingModalPage } from './sorting-modal';


@NgModule({
  declarations: [
    SortingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SortingModalPage),
  ],
})
export class SortingModalPageModule { }
