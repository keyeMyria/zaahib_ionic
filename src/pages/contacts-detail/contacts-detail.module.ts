import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsDetailPage } from './contacts-detail';

@NgModule({
  declarations: [
    ContactsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsDetailPage),
  ],
})
export class ContactsDetailPageModule {}
