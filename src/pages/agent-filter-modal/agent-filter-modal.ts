import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { listingProperties, propertyTypeList, propertyFinalizingList, rentAmountPerList, featuresList, userLanguages, userServices } from '../../assets/Zaahib Global Data/setup_data';
import { GlobalProvider } from '../../providers/shared/global';
import { ListModalPage } from '../list-modal/list-modal';
import { SearchProvider } from '../../providers/shared/search';
import { LocationModalPage } from '../modal/location-modal/location-modal';
import { SearchAgentsPage } from '../search-agents/search-agents';
import { AddListingSimpleModePage } from '../add-listing-simple-mode/add-listing-simple-mode';



@IonicPage()
@Component({
  selector: 'page-agent-filter-modal',
  templateUrl: 'agent-filter-modal.html',
})
export class AgentFilterModalPage {

  locationBoolVal: boolean = false;
  selectedLocations: Array<{ id: number, title: string }>;
  propertyId: any;
  listingProperties: any;
  selected: any;
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public globalProvider:GlobalProvider,
    public searchProvider:SearchProvider,
    public translate: TranslateService, ) {
    this.listingProperties = listingProperties;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentFilterModalPage');
  }

  showList(propertyId) {
    this.propertyId = propertyId;
    let modal: Modal = this.modalCtrl.create(ListModalPage, {
      propertyId: propertyId,
      title: this.translate.instant(this.searchProvider.modalData[propertyId].title),
      listValues: this.searchProvider.modalData[propertyId].listValues
    });
    modal.onDidDismiss((selected) => {
      this.selected = selected;
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

  searchAgent(){
    this.navCtrl.push(SearchAgentsPage);
  }


}
