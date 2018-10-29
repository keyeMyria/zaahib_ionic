import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterModalPage } from './filter-modal';
import { GlobalProvider, translator } from '../../../providers/shared/global';


@NgModule({
  declarations: [
    FilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterModalPage), translator

  ],
})
export class FilterModalPageModule { }
