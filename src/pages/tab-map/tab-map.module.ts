import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMapPage } from './tab-map';

@NgModule({
  declarations: [
    TabMapPage,
  ],
  imports: [
    IonicPageModule.forChild(TabMapPage),
  ],
})
export class TabMapPageModule {}
