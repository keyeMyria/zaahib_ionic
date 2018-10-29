import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddListingAdvancedModePage } from '../add-listing-advanced-mode/add-listing-advanced-mode';



@IonicPage()
@Component({
  selector: 'page-add-listing-simple-mode',
  templateUrl: 'add-listing-simple-mode.html',
})
export class AddListingSimpleModePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListingSimpleModePage');
  }

  addListingAdvancedPage(){
    this.navCtrl.push(AddListingAdvancedModePage);
  }

}
