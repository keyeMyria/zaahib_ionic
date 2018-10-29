import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { GlobalProvider } from '../../providers/shared/global';
import { SearchProvider } from '../../providers/shared/search';


@IonicPage()
@Component({
  selector: 'page-range-selector-modal',
  templateUrl: 'range-selector-modal.html',
})
export class RangeSelectorModalPage {

  title: string = "";
  propertyId: string = "";
  min: any;
  max: any;
  knobValues: any = {};
  miniValue;
  maxiValue: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public viewController: ViewController,
    public translate: TranslateService,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
    this.propertyId = this.navParams.get('propertyId');
    this.knobValues.lower = this.searchProvider.modalData[this.propertyId].lower;
    this.knobValues.upper = this.searchProvider.modalData[this.propertyId].upper == 0 ? 
      this.searchProvider.modalData[this.propertyId].max : this.searchProvider.modalData[this.propertyId].upper;
    this.min = this.searchProvider.modalData[this.propertyId].min;
    this.max = this.searchProvider.modalData[this.propertyId].max;
  }


  close() {
    let modal = this.modalController.create(HomePage);
    modal.present();
  }

  done() {
    this.searchProvider.modalData[this.propertyId].lower = this.knobValues.lower;
    this.searchProvider.modalData[this.propertyId].upper = this.knobValues.upper;
    this.searchProvider.modalData[this.propertyId].isDataValid = true;
    let done = this.navCtrl.pop();
  }

}
