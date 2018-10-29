import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { translator } from '../../providers/shared/global';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { SimilarPropertiesComponent } from '../../components/similar-properties/similar-properties';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    translator,
    ComponentsModule,
    PipesModule,
   
  ],
})
export class DetailPageModule {}
