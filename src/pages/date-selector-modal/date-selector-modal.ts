import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FilterModalPage } from '../modal/filter-modal/filter-modal';


@Component({
  selector: 'page-date-selector-modal',
  templateUrl: 'date-selector-modal.html',
})
export class DateSelectorModalPage {

  fromDate;
  toDate;

  postedDate:any = {
    from: this.fromDate,
    to: this.toDate
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalController: ModalController,
    public viewController: ViewController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateSelectorModalPage');
    const datefrom = this.navParams.get('from');
    const dateto = this.navParams.get('to');

    this.fromDate = datefrom;
    this.toDate = dateto;
  }

  close(){
    let modal = this.modalController.create(HomePage);
    modal.present();
  }

  done(){
      let done = this.viewController.dismiss({from: this.fromDate, to:this.toDate});
    }


}
