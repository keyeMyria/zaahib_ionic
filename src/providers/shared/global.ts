import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { country, countryLocaliztionData } from '../../app/models/shared/general';
import { Platform } from 'ionic-angular';
import { countryList } from '../../assets/Zaahib Global Data/CountryList';
import { area } from '../../app/models/shared/general';
import { getCountryLocaliztionData } from '../../assets/Zaahib Global Data/CountryLocalizationData';
import { UserData, User } from '../../app/models/shared/user';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../../app/app.module';
declare var require: any;

@Injectable()
export class GlobalProvider {
  selectedCountry: country = { Country: "sa", CountryName: "Saudi Arabia", CountryNameAr: "السعودية", CountryNameEn: "Saudi Arabia", Domain: "https://www.zaahib.com/" };
  selectedLanguage: string = "en";
  country: string = "sa";
  countries: Array<country>;
  areas: Array<area> = [];
  countryData: countryLocaliztionData;
  isAuthenticated: Boolean;
  userData: UserData;
  constructor(public platform: Platform) {
    this.countries = countryList;
    this.loadDataFromLocalStorage();
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].Country == this.country) {
        this.selectedCountry = this.countries[i];
        break;
      }
    }
    this.countryData = getCountryLocaliztionData(this.selectedLanguage, this.country);
    this.loadCountryAreas(this.country);
    if (this.selectedLanguage == "ar") {
      this.platform.setDir('rtl', true);
    }
  }

  changeDirection() {
    if (this.platform.isRTL)
      this.platform.setDir('ltr', true);
    else
      this.platform.setDir('rtl', true);
  }

  loadCountryAreas(_country: string) {
    let fileName;
    switch (_country) {
      case "sa": {
        fileName = 'areas_list_sa';
        break;
      }
      case "tr": {
        fileName = 'areas_list_tr';
        break;
      }
      case "ye": {
        fileName = 'areas_list_ye';
        break;
      }
      case "qa": {
        fileName = 'areas_list_qa';
        break;
      }
      case "om": {
        fileName = 'areas_list_om';
        break;
      }
      case "kw": {
        fileName = 'areas_list_kw';
        break;
      }
      case "eg": {
        fileName = 'areas_list_eg';
        break;
      }
      case "dz": {
        fileName = 'areas_list_dz';
        break;
      }
      case "bh": {
        fileName = 'areas_list_bh';
        break;
      }
      case "ae": {
        fileName = 'areas_list_ae'
        break;
      }
      default: {
        fileName = 'areas_list_sa';
        break;
      }
    }
    this.areas = require('../../assets/Zaahib Global Data/' + fileName).areaList as Array<area>;
  }

  isUserAuthenticated() {
    try {
      if (localStorage.getItem("session_key") === null && localStorage.getItem("current_user_json") === null) {
        this.isAuthenticated = false;
      }
      else {
        this.isAuthenticated = true;
      }

    } catch (e) {
      console.log(e);
    }

  }

  loadDataFromLocalStorage() {
    try {
      if (localStorage.getItem("current_user_json") != null) {
        this.userData = { user: JSON.parse(localStorage.getItem("current_user_json")) as User } as UserData;
      }
      if (localStorage.getItem("country") != null) {
        this.country = localStorage.getItem("country");
      }
      if (localStorage.getItem("lang") != null) {
        this.selectedLanguage = localStorage.getItem("lang");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const translator = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient]
  }
})
