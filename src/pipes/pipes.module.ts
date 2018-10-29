import { NgModule } from '@angular/core';
import { RemoveDecimalPipe } from './remove-decimal/remove-decimal';
import { AppModule } from '../app/app.module';
import { SliceVotePipe } from './slice-vote/slice-vote';
@NgModule({
	declarations: [RemoveDecimalPipe,
    SliceVotePipe],
	imports: [],
	exports: [RemoveDecimalPipe,
    SliceVotePipe]
})
export class PipesModule {}
