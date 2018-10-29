import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { RegisterEmailModalPage } from './register-email/register-email';
import { RegisterMobileModalPage } from './register-mobile/register-mobile';


@IonicPage()
@Component({
  selector: 'page-register-modal',
  templateUrl: 'register-modal.html',
})
export class RegisterModalPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public translate: TranslateService,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  showRegisterEmailModal() {
    let registerEmailModal = this.modalCtrl.create(RegisterEmailModalPage, {}, {
      showBackdrop: false
    });
    registerEmailModal.present();
  }

  showRegisterMobileModal() {
    let registerMobileModal = this.modalCtrl.create(RegisterMobileModalPage, {}, {
      showBackdrop: false
    });
    registerMobileModal.present();
  }

}


