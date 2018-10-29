import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsOfUseProvider } from '../../providers/menu/termsofuse';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-terms-of-use',
  templateUrl: 'terms-of-use.html',
})
export class TermsOfUsePage {
  terms: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public termsOfUseProvider: TermsOfUseProvider) {

  }

  ionViewDidLoad() {
    this.getTermsOfUse();
  }

  async getTermsOfUse() {
    this.termsOfUseProvider.getTermsOfUse<any>().then(res => {
      this.terms = res.data.content;
    }).catch(err => {
      err;
    });
  }

  goback() {
    this.navCtrl.push(HomePage);
  }

}
