import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contacts-detail',
  templateUrl: 'contacts-detail.html',
})
export class ContactsDetailPage {

  address: String = '23246, Mraykh, Jeddah, Makkah';

  contactInfo = [
    {
      name: 'name',
      value: 'جامع التركي'
    },
    {
      name: 'email',
      value: 'e-g-126@jgschoola.gov.sa'
    },
    {
      name: 'distance',
      value: '0.2 km'
    },
    {
      name: 'phone',
      value: 6914200
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsDetailPage');
  }
  goBack() {
    this.navCtrl.pop();
  }

}
