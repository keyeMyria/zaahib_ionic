import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MapPage } from '../../map/map';
import { GlobalProvider } from '../../../providers/shared/global';
import { area, selectedLocation } from '../../../app/models/shared/general';
import { SearchProvider } from '../../../providers/shared/search';


@IonicPage()
@Component({
  selector: 'page-location-modal',
  templateUrl: 'location-modal.html',
})
export class LocationModalPage {
  searchResults: Array<{ id: number, title: string }>;
  selectedProvince: area;
  selectedCity: area;
  selectedDistrict: area;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider,
  ) {}

  ionViewDidLoad() {
  }

  addLocation() {
    if (this.selectedProvince) {
      const areaToPush = this.selectedDistrict ? this.selectedDistrict : this.selectedCity ? this.selectedCity : this.selectedProvince;
      if (this.searchProvider.selectedLocations.filter(x => x.id === areaToPush.id).length <= 0) {
        this.searchProvider.selectedLocations.push(areaToPush);
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss(this.searchProvider.selectedLocations);
  }

  push() {
    this.navCtrl.pop();
    this.navCtrl.push(MapPage);
  }

  locationChange(event: selectedLocation) {
    this.selectedProvince = event.selectedProvince;
    this.selectedCity = event.selectedCity;
    this.selectedDistrict = event.selectedDistrict;
  }
}
