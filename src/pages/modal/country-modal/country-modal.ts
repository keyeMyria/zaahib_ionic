import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GlobalProvider } from '../../../providers/shared/global';
import { getCountryLocaliztionData } from '../../../assets/Zaahib Global Data/CountryLocalizationData';
import { ServerProvider } from '../../../providers/shared/server';
import { country } from '../../../app/models/shared/general';


@IonicPage()
@Component({
  selector: 'page-country-modal',
  templateUrl: 'country-modal.html',
})
export class CountryModalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public serverProvider: ServerProvider
  ) {

  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss(this.globalProvider.selectedCountry);
  }

  getItem(currentCountry: country) {
    this.globalProvider.country = currentCountry.Country;
    this.globalProvider.selectedCountry = currentCountry;
    localStorage.setItem('country', this.globalProvider.country);

    this.globalProvider.countryData = getCountryLocaliztionData(this.globalProvider.selectedLanguage, this.globalProvider.selectedCountry.Country);
    this.globalProvider.loadCountryAreas(this.globalProvider.selectedCountry.Country);

    this.dismiss();

  }

}
