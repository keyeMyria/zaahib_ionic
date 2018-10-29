import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { RegisterMobileUsernamePage } from '../register-mobile-username/register-mobile-username';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';
import { LoginProvider } from '../../../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-verify-mobile',
  templateUrl: 'verify-mobile.html',
})
export class VerifyMobilePage {
  mobileNumber: string;
  verificationCode: string = "";
  sessionKey: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalController: ModalController,
    public utilityProvider: UtilitiesProvider,
    public loginProvider: LoginProvider,
  ) {
  }


  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  gotoRegisterMobileEmail() {
    let modal = this.modalController.create(RegisterMobileUsernamePage, { MobileNumber: this.mobileNumber });
    modal.present();

  }

  async resendCode() {
    this.utilityProvider.showLoader();
    this.loginProvider.resendCode<any>().then(res => {
      this.utilityProvider.hideLoader();
      if (res.success == 1) {
        this.loginProvider.userMobileData.sessionkey = res.session_key;
        this.utilityProvider.presentToast("Code Sent", "success-toast");
      }
      else {
        this.utilityProvider.presentToast("Cannot Send Code", "fail-toast");

      }
    })
  }


  async verifyMobile() {
    if (this.verificationCode == "" || this.verificationCode == undefined) {
      this.utilityProvider.presentToast("Please enter verification code", "fail-toast");
      return false;
    }
    this.utilityProvider.showLoader();
    this.loginProvider.verifyCode<any>(this.verificationCode).then(res => {
      this.utilityProvider.hideLoader();
      if (res.success == 1) {
        this.dismiss();
        this.gotoRegisterMobileEmail();
      }
      else {
        let errormsg = res.error;
        this.utilityProvider.presentToast(errormsg, "fail-toast");

      }
    })
  }
}


