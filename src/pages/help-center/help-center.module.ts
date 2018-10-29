import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpCenterPage } from './help-center';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../../app/app.module';
import { HttpClient } from '@angular/common/http';
import { translator } from '../../providers/shared/global';
@NgModule({
  declarations: [
    HelpCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpCenterPage), translator
  ],
})
export class HelpCenterPageModule { }
