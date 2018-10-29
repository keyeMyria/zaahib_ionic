import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapDetailPage } from './map-detail';

@NgModule({
  declarations: [
    MapDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MapDetailPage),
  ],
})
export class MapDetailPageModule {}
