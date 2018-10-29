import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { DirectoryPage } from '../directory/directory';
import { ListPage } from '../list/list';
import { FilterModalPage } from '../modal/filter-modal/filter-modal';


@IonicPage()
@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html',
})
export class TabMapPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  showFilterModal() {
    let filter = this.modalCtrl.create(FilterModalPage, {}, {
      showBackdrop: false
    });
    filter.onDidDismiss(data => {

    });
    filter.present();
  }

  // showSortModal() {
  //   let sortModal = this.modalCtrl.create(SortModalPage, {}, {
  //     showBackdrop: false
  //   });
  //   sortModal.onDidDismiss(data => {
  //   });
  //   sortModal.present();
  // }

  openDirectoryPage() {
    this.navCtrl.setRoot(DirectoryPage, {}, { animate: true });
  }

  openListPage() {
    this.navCtrl.setRoot(ListPage, {}, { animate: true });
  }
}
