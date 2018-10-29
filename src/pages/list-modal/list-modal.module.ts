import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListModalPage } from './list-modal';
import { translator } from '../../providers/shared/global';


@NgModule({
  declarations: [
    ListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListModalPage),
    translator
  ],
})
export class ListModalPageModule {}
