import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/shared/search';

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderComponent {
  searchProvider: SearchProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams, searchProvider: SearchProvider) {
    this.searchProvider = searchProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

}
