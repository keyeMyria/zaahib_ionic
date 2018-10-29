import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../../../providers/shared/global';
import { CountryPhonePrefixesEn } from '../../../../assets/Zaahib Global Data/setup_data';

import { LoginProvider } from '../../../../providers/login/login';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';
import { VerifyMobilePage } from '../../../modal/register-modal/verify-mobile/verify-mobile';
import { ContactDetail } from '../../../../app/models/property';
import { AddPropertyProvider } from '../../../../providers/property/add-property';


@IonicPage()
@Component({
  selector: 'page-contact-detail-section',
  templateUrl: 'contact-detail-section.html',
})
export class ContactDetailSectionPage {

  countryCodeData: any = CountryPhonePrefixesEn;
  MobileNumber: string;

  ContactDetal = new Object();


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public modalController: ModalController,
    public loginProvider: LoginProvider,
    public utilityProvider: UtilitiesProvider,
    public addPropertyProvider: AddPropertyProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailSectionPage');
  }

  gotoVerficationPage() {
    let modal = this.modalController.create(VerifyMobilePage);
    modal.present();

  }

  dismiss() {

  console.log(this.addPropertyProvider.ContactDetal);
  if(this.addPropertyProvider.ContactDetal.AgencyName != ""){
    this.addPropertyProvider.editContact = true;
  }
    this.viewCtrl.dismiss();
  }

  validateMobile(mobileNumber) {
    if (mobileNumber == "" || mobileNumber == undefined) {
      return dataValid = false;
    }
    var dataValid = true;
    mobileNumber = mobileNumber.replace(/_/g, '');

    if (mobileNumber.indexOf('+' + this.countryCodeData[this.globalProvider.country].prefix) == 0) {
      mobileNumber = mobileNumber.substr(this.countryCodeData[this.globalProvider.country].prefix.length + 1);
    }
    else if (mobileNumber.indexOf('00' + this.countryCodeData[this.globalProvider.country].prefix) == 0) {
      mobileNumber = mobileNumber.substr(this.countryCodeData[this.globalProvider.country].prefix.length + 2);
    }
    else if (mobileNumber.indexOf(this.countryCodeData[this.globalProvider.country].prefix) == 0) {
      mobileNumber = mobileNumber.substr(this.countryCodeData[this.globalProvider.country].prefix.length);
    }
    if (mobileNumber.substr(0, 1) == "0") mobileNumber = mobileNumber.replace(/^[0]{1,}([1-9]{1}[\d\-]{5,})/, '$1');
    let MobileRegex: any;
    let a = eval('MobileRegex = ' + this.globalProvider.countryData.MOBILE_NUMBER_REGEX);

    if (mobileNumber != "" && !MobileRegex.test(mobileNumber)) {
      dataValid = false;
    }
    return dataValid;
  }

}
