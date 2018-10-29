import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { translator } from '../../providers/shared/global';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),translator,PipesModule
  ],
})
export class ListPageModule {}
