import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgentFilterModalPage } from '../agent-filter-modal/agent-filter-modal';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-search-agents',
  templateUrl: 'search-agents.html',
})
export class SearchAgentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchAgentsPage');
  }

  close(){
    this.navCtrl.setRoot(HomePage);
  }

  agentFilterModal(){
    this.navCtrl.push(AgentFilterModalPage);
  }

}
