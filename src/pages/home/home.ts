import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, Platform, App, ViewController, Modal } from 'ionic-angular';
import { listingProperties, propertyTypeList, propertyFinalizingList, rentAmountPerList } from '../../assets/Zaahib Global Data/setup_data';


import { LocationModalPage } from '../modal/location-modal/location-modal';
import { ListPage } from '../list/list';
import { RangeSelectorModalPage } from '../range-selector-modal/range-selector-modal';
import { SearchProvider } from '../../providers/shared/search';
import { GlobalProvider } from '../../providers/shared/global';
import { TranslateService } from '@ngx-translate/core';
import { ListModalPage } from '../list-modal/list-modal';
import { NumericSelectorModalPage } from '../numeric-selector-modal/numeric-selector-modal';
import { AgentFilterModalPage } from '../agent-filter-modal/agent-filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  selectedLocations: Array<{ id: number, title: string }>;
  selectedProperties: Array<{ id: string, name: string }>;
  SelectedItems: any;
  listingProperties: any;
  selected: any;
  locationBoolVal: boolean = false;

  constructor(public navCtrl: NavController,
    public modalController: ModalController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public platform: Platform,
    public searchProvider: SearchProvider,
    public appCtrl: App,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public translate: TranslateService,
  ) {
    this.listingProperties = listingProperties;
  }

  ionViewDidLoad() {
    this.selected = this.searchProvider.modalData.Type.values;
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  showLocationModal() {
    let locationModal = this.modalCtrl.create(LocationModalPage, {}, {
      showBackdrop: false
    });
    locationModal.onDidDismiss(data => {
      if ((!this.isEmpty(data) && this.locationBoolVal) || (!this.isEmpty(data) && !this.locationBoolVal)) {
        this.selectedLocations = data;
        this.locationBoolVal = true;
      } else if (this.isEmpty(data) && !this.locationBoolVal) {
        this.locationBoolVal = false;
      }
    });
    locationModal.present();
  }

  openPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(ListPage, {}, { animate: true });
  }

  changeDirection() {
    if (this.platform.isRTL)
      this.platform.setDir('ltr', true);
    else
      this.platform.setDir('rtl', true);
  }


  RangeSelectorModalPage(propertyId) {
    let modal: Modal;
    if (typeof this.listingProperties[propertyId] == "undefined") {
      modal = this.modalCtrl.create(RangeSelectorModalPage, {
        propertyId: propertyId,
        title: this.translate.instant(propertyId),
      });
    }
    else {
      modal = this.modalCtrl.create(RangeSelectorModalPage, {
        propertyId: propertyId,
        title: this.globalProvider.selectedLanguage == "en" ? this.listingProperties[propertyId].nameEn : this.listingProperties[propertyId].nameAr,
      });
    }
    modal.present();
  }

  NumericSelectorModalPage(propertyId) {
    let modal: Modal;
    if (typeof this.listingProperties[propertyId] == "undefined") {
      modal = this.modalCtrl.create(NumericSelectorModalPage, {
        propertyId: propertyId,
        title: this.translate.instant(propertyId),
        min: this.searchProvider.modalData[propertyId].min, max: this.searchProvider.modalData[propertyId].max
      });
    }
    else {
      modal = this.modalCtrl.create(NumericSelectorModalPage, {
        propertyId: propertyId,
        title: this.globalProvider.selectedLanguage == "en" ? this.listingProperties[propertyId].nameEn : this.listingProperties[propertyId].nameAr,
        min: this.searchProvider.modalData[propertyId].min, max: this.searchProvider.modalData[propertyId].max
      });
    }
    modal.onDidDismiss(({ propertyId: propertyId, min: min, max: max }) => {

      this.searchProvider.modalData[propertyId].min = min;
      this.searchProvider.modalData[propertyId].max = max;

      if (min == 0 && max == 0) {
        this.searchProvider.modalData[propertyId].isDataValid = false;
      } else {
        this.searchProvider.modalData[propertyId].min = min;
        this.searchProvider.modalData[propertyId].max = max;
        this.searchProvider.modalData[propertyId].isDataValid = true;
      }
    });
    modal.present();
  }

  showList(propertyId) {
    let modal: Modal;
    if (typeof this.listingProperties[propertyId] == "undefined") {
      modal = this.modalCtrl.create(ListModalPage, {
        propertyId: propertyId,
        title: this.translate.instant(propertyId),
        listValues: this.searchProvider.modalData[propertyId].listValues
      });
    }
    else {
      modal = this.modalCtrl.create(ListModalPage, {
        propertyId: propertyId,
        title: this.globalProvider.selectedLanguage == "en" ? this.listingProperties[propertyId].nameEn : this.listingProperties[propertyId].nameAr,
        listValues: this.searchProvider.modalData[propertyId].listValues
      });
    }
    modal.onDidDismiss((selected) => {
      this.selected = selected
    })
    modal.present();
  }

  agentFilterModalPage(){
    this.navCtrl.push(AgentFilterModalPage);
  }

}
