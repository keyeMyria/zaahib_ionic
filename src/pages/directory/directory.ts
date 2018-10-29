import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TabMapPage } from '../tab-map/tab-map';
import { ListPage } from '../list/list';
import { FilterModalPage } from '../modal/filter-modal/filter-modal';
import { DetailPage } from '../detail/detail';


@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {

  filters: Number;

  filterData: any = [
    {
      name: 'Villas',
      value: 95042
    }
  ]

  items: any = [
    {
      images: [
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' }
      ],
      type: 'Apartment',
      note: 'Sale',
      name: 'Damac Properties Co. LLC',
      bedRooms: 2,
      bathRooms: 3,
      area: 140,
      price: '1,228,080'
    },
    {
      images: [
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' },
        { url: '../../assets/imgs/slide-img.jpg' }
      ],
      type: 'Apartment',
      note: 'Sale',
      name: 'Damac Properties Co. LLC',
      bedRooms: 2,
      bathRooms: 3,
      area: 140,
      price: '1,228,080'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.filters = 3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
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

  openMapPage() {
    this.navCtrl.setRoot(TabMapPage, {}, { animate: true });
  }

  openListPage() {
    this.navCtrl.setRoot(ListPage, {}, { animate: true });
  }

  pushPage() {
    this.navCtrl.push(DetailPage);
  }

}
