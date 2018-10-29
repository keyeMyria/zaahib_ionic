import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GlobalProvider } from '../../../../providers/shared/global';
import { CountryPhonePrefixesEn } from '../../../../assets/Zaahib Global Data/setup_data';
import { VerifyMobilePage } from '../verify-mobile/verify-mobile';
import { LoginProvider } from '../../../../providers/login/login';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';

@Component({
  selector: 'page-register-mobile',
  templateUrl: 'register-mobile.html',
})
export class RegisterMobileModalPage {
  countryCodeData: any = CountryPhonePrefixesEn;
  MobileNumber: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public modalController: ModalController,
    public loginProvider: LoginProvider,
    public utilityProvider: UtilitiesProvider
  ) {
  }

  ionViewDidLoad() {
  }


  gotoVerficationPage() {
    let modal = this.modalController.create(VerifyMobilePage);
    modal.present();

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  async sendCode() {

    if (this.validateMobile(this.MobileNumber)) {
      let FullNumber = "+" + this.countryCodeData[this.globalProvider.country].prefix + this.MobileNumber.trim();
      this.utilityProvider.showLoader();
      this.loginProvider.userMobileData.mobilenumber = FullNumber;
      this.loginProvider.sendCode<any>().then(res => {
        this.utilityProvider.hideLoader();
        if (res.success == 1) {
          this.loginProvider.userMobileData.sessionkey = res.session_key;
          this.loginProvider.userMobileData.mobilenumber = FullNumber;
          this.gotoVerficationPage();
          this.dismiss();
        }
        else {
          this.utilityProvider.presentToast("Cannot Send Code", "fail-toast");

        }
      })
    }
    else {
      this.utilityProvider.presentToast("Invalid Mobile Number", "fail-toast");
    }
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
