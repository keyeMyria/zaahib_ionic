import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MapPage } from '../../map/map';


@IonicPage()
@Component({
  selector: 'page-filter-location-modal',
  templateUrl: 'filter-location-modal.html',
})
export class FilterLocationModalPage {

  searchResults: Array<{id: number, title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.searchResults = [
      { id: 1, title: 'Riyadh'},
      { id: 2, title: 'Jeddah'},
      { id: 3, title: 'Mecca'},
      { id: 4, title: 'Dammam'},
      { id: 5, title: 'Jubail'},
      { id: 6, title: 'Khobar'},
      { id: 7, title: 'Abha' }
    ];
  }

  ionViewDidLoad() {
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  push(){
    this.navCtrl.push(MapPage);
  }
  

}
