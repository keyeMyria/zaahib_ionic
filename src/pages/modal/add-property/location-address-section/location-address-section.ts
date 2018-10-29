import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../../../providers/shared/global';
import { area, selectedLocation } from '../../../../app/models/shared/general';
import { SearchProvider } from '../../../../providers/shared/search';
import { AddPropertyProvider } from '../../../../providers/property/add-property';
import { location } from '../../../../app/models/property';


@IonicPage()
@Component({
  selector: 'page-location-address-section',
  templateUrl: 'location-address-section.html',
})
export class LocationAddressSectionPage {

  searchResults: Array<{ id: number, title: string }>;
  selectedProvince: area;
  selectedCity: area;
  selectedDistrict: area;

  location:location = {
    selectedProvince: this.addPropertyProvider.location.selectedProvince,
    selectedCity: this.addPropertyProvider.location.selectedCity,
    selectedDistrict: this.addPropertyProvider.location.selectedDistrict,
    StreetName: "",
    BuildingNo: 0,
    ZipCode: 0,
    AdditionalNo: 0
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider,
    public modalController: ModalController,
    public addPropertyProvider: AddPropertyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationAddressSectionPage');
   console.log(this.addPropertyProvider.location);
  // this.addPropertyProvider.locatActive = true;
    // if(this.addPropertyProvider.location !== null){
    //   this.location = this.addPropertyProvider.location;
    // }
  }

  done() {
    this.navCtrl.pop();
  }

  addLocation() {
    if (this.selectedProvince) {
      const areaToPush = this.selectedDistrict ? this.selectedDistrict : this.selectedCity ? this.selectedCity : this.selectedProvince;
      this.addPropertyProvider.selectedLocation = areaToPush;
    }
  }

  push() {
    this.navCtrl.pop();
  }

  locationChange(event: selectedLocation) {
    // this.location.selectedProvince = event.selectedProvince;
    // this.location.selectedCity = event.selectedCity;
    // this.location.selectedDistrict = event.selectedDistrict;
    }
    
}
  


