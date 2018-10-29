import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertisingPage } from './advertising';
import { translator } from '../../providers/shared/global';

@NgModule({
  declarations: [
    AdvertisingPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertisingPage),
    translator
  ],
})
export class AdvertisingPageModule {}
