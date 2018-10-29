import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TabMapPage } from '../tab-map/tab-map';
import { DirectoryPage } from '../directory/directory';
import { FilterModalPage } from '../modal/filter-modal/filter-modal';
import { DetailPage } from '../detail/detail';
import { GlobalProvider } from '../../providers/shared/global';
import { HomePage } from '../home/home';
import { UtilitiesProvider } from '../../providers/shared/utilities';
import { PropertyListProvider } from '../../providers/property/property-list';
import { SortingModalPage } from '../sorting-modal/sorting-modal';
import { SearchProvider } from '../../providers/shared/search';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  propertiesList = [];
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
  loader: string = 'assets/icon/loading-icon.svg';
  filters: Number;
  buttonText: string = "Relevance";
  searchProvider: SearchProvider;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public modalController: ModalController,
    public globalProvider: GlobalProvider,
    public utilityProvider: UtilitiesProvider,
    public propertyListProvider: PropertyListProvider,
    searchProvider: SearchProvider
  ) {
    this.searchProvider = searchProvider;
    this.filters = 3;
    this.searchProperties();
    
  }

  ionViewDidLoad() {
  }

  loadMore(infiniteScroll) {
    this.page = this.page + 1;


    this.searchProperties(infiniteScroll);
    // infiniteScroll.complete();
    if (this.page === this.totalPage) {
      infiniteScroll.enable(false);
    }
  }


  showFilterModal() {
    let filter = this.modalCtrl.create(FilterModalPage, {}, {
      showBackdrop: false
    });
    filter.onDidDismiss(data => {

    });
    filter.present();
  }


  openDirectoryPage() {
    this.navCtrl.setRoot(DirectoryPage, {}, { animate: true });
  }

  openMapPage() {
    this.navCtrl.setRoot(TabMapPage, {}, { animate: true });
  }

  openDetailPage(listingID: number) {
    this.navCtrl.push(DetailPage, listingID);
  }

  showRelevancePage() {
    let modal = this.modalController.create(SortingModalPage, { filterValue: this.buttonText });
    modal.onDidDismiss((btnTxt) => {

      console.log(btnTxt.buttonTxt);
      this.buttonText = btnTxt.buttonTxt;
      console.log(this.buttonText);
    });
    modal.present();
  }

  goHome() {
    this.navCtrl.setRoot(HomePage, {}, { animate: true });

  }

  searchProperties(infiniteScroll?: any) {
    this.propertyListProvider.getProperties<any>(this.page).then(res => {
      this.propertiesList = this.propertiesList.concat(res.listings);
      this.totalPage = res.pages_number;
      this.totalData = res.total_found;
      this.page = res.current_page;
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    }).catch(err => {
      console.log(err);
    });
  }

  loadAlternateImage($event, propertyType: string) {
    let img = $event.target;
    img.src = 'assets/imgs/propertytype/' + propertyType + '_bg.jpg';

  }
}
