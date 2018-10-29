import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Modal } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/shared/global';
import { TranslateService } from '@ngx-translate/core';
import { UtilitiesProvider } from '../../providers/shared/utilities';


@Component({
  selector: 'page-numeric-selector-modal',
  templateUrl: 'numeric-selector-modal.html',
})
export class NumericSelectorModalPage {

  minValue: number = 0;
  maxValue: number = 0;
  title: string = "";
  propertyId: string = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public viewController: ViewController,
    public globalProvider: GlobalProvider,
    public translate: TranslateService,
    public utilitiesProvider: UtilitiesProvider) {

  }

  ionViewDidLoad() {
    this.minValue = this.navParams.get('min');
    this.maxValue = this.navParams.get('max');
    this.title = this.navParams.get('title');
    this.propertyId = this.navParams.get('propertyId');
  }

  done() {
    if (this.minValue <= this.maxValue) {
      let done = this.viewController.dismiss({ min: this.minValue, max: this.maxValue, propertyId: this.propertyId });
    } else {
      this.utilitiesProvider.presentToast("Minimum value cannot be greator then Maximum value", "fail-toast");
      this.minValue = 0;
      this.maxValue = 0;
    }
  }

}
