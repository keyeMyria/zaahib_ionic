import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactUsPage } from '../contact-us/contact-us';
import { AdvertisingProvider } from '../../providers/menu/advertising';
import { GlobalProvider } from '../../providers/shared/global';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-advertising',
  templateUrl: 'advertising.html',
})
export class AdvertisingPage {
  toggle: boolean = false;
  ads: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public advertisingProvider: AdvertisingProvider,
    public globalProvider: GlobalProvider
  ) {
  }

  ionViewDidLoad() {
    this.getAdvertisements();
  }

  gotoHelpPage() {
    this.navCtrl.push(ContactUsPage);
  }

  toggleExample(image) {
    image.show = !image.show
  }

  isExampleShown(image) {
    return image.show;

  }

  async getAdvertisements() {

    await this.advertisingProvider.getAdvertisements<any>().then(res => {
      this.ads = res.ads;

    }).catch(err => {
      console.log(err);
    });
  }

  goback() {
    this.navCtrl.push(HomePage);
  }

}
