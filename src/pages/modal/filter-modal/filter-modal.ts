import { Component, NgModule } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController, ModalController, Modal } from 'ionic-angular';

import { FilterLocationModalPage } from '../filter-location-modal/filter-location-modal';
import { GlobalProvider } from '../../../providers/shared/global';
import { RangeSelectorModalPage } from '../../range-selector-modal/range-selector-modal';
import { listingProperties, propertyTypeList, propertyFinalizingList, rentAmountPerList, featuresList } from '../../../assets/Zaahib Global Data/setup_data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DateSelectorModalPage } from '../../date-selector-modal/date-selector-modal';
import { ListModalPage } from '../../list-modal/list-modal';
import { SearchProvider } from '../../../providers/shared/search';
import { NumericSelectorModalPage } from '../../numeric-selector-modal/numeric-selector-modal';
import { LocationModalPage } from '../location-modal/location-modal';
import { AgentFilterModalPage } from '../../agent-filter-modal/agent-filter-modal';
import { ListPage } from '../../list/list';


@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {

  locationBoolVal: boolean = false;
  selectedLocations: Array<{ id: number, title: string }>;
  listingProperties: any;
  selectedProperties: Array<{ id: string, name: string }>;
  isSelected: boolean;
  selected: any;
  propertyId: any;
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  constructor(public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public globalProvider: GlobalProvider,
    public translate: TranslateService,
    public searchProvider: SearchProvider) {
    this.listingProperties = listingProperties;
  }

  ionViewDidLoad() {
  }


  DateSelectorModalPage() {
    let modal = this.modalCtrl.create(DateSelectorModalPage, { from: this.searchProvider.modalData.DateSelectorModalPage.from, to: this.searchProvider.modalData.DateSelectorModalPage.to });
    modal.onDidDismiss((data) => {
      this.searchProvider.modalData.DateSelectorModalPage = data;
    })
    modal.present();
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPage() {
    this.appCtrl.getRootNav().setRoot(ListPage, {}, { animate: true });
    this.dismiss();
  }

  showList(propertyId) {
    this.propertyId = propertyId;
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
