import { NgModule } from '@angular/core';
import { LocationSelectorComponent } from './location-selector/location-selector';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { translator } from '../providers/shared/global';
import { SimilarPropertiesComponent } from './similar-properties/similar-properties';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	declarations: [
		HeaderComponent,
		SimilarPropertiesComponent,
		LocationSelectorComponent,
   
	],
	imports: [
		IonicModule,translator,PipesModule

	],
	exports: [
		LocationSelectorComponent,
		HeaderComponent,
		SimilarPropertiesComponent,
	]
})
export class ComponentsModule {}
