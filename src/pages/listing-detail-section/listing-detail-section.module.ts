import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListingDetailSectionPage } from './listing-detail-section';
import { translator } from '../../providers/shared/global';


@NgModule({
  declarations: [
    ListingDetailSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ListingDetailSectionPage), translator
  ],
})
export class ListingDetailSectionPageModule {}
