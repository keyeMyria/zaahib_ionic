import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchAgentsPage } from './search-agents';
import { AgentFilterModalPage } from '../agent-filter-modal/agent-filter-modal';

@NgModule({
  declarations: [
    SearchAgentsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SearchAgentsPage),
    AgentFilterModalPage
  ],
})
export class SearchAgentsPageModule {}
