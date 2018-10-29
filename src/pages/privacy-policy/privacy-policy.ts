import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivacypolicyProvider } from '../../providers/menu/privacypolicy';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {
  policy: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public privacypolicyProvider: PrivacypolicyProvider) {

  }

  ionViewDidLoad() {
    this.getPrivacypolicy();
  }

  async getPrivacypolicy() {
    this.privacypolicyProvider.getPrivcacyPolicy<any>().then(res => {

      this.policy = res.data.content;

    }).catch(err => {
      console.log(err);
    });
  }

  goback() {
    this.navCtrl.push(HomePage);
  }

}
