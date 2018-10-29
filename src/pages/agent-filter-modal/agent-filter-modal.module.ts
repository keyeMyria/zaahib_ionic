import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentFilterModalPage } from './agent-filter-modal';
import { GlobalProvider, translator } from '../../providers/shared/global';


@NgModule({
  declarations: [
    AgentFilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentFilterModalPage), translator
  ],
})
export class AgentFilterModalPageModule {}
