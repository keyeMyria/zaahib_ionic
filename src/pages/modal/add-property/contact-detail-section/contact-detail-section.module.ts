import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailSectionPage } from './contact-detail-section';

@NgModule({
  declarations: [
    ContactDetailSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailSectionPage),
  ],
})
export class ContactDetailSectionPageModule {}
