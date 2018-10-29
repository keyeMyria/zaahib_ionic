import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-map-detail',
  templateUrl: 'map-detail.html',
})
export class MapDetailPage {

  mapsData = {
    items: [
      { name: 'جامع التركي', length: '0.2 km' },
      { name: 'مهجة', length: '0.2 km' },
      { name: 'المدرسة الثالثة لتحفيظ القران الكريم الأبتدائية', length: '0.3 km' },
      { name: '126 ابتدائية 	', length: '0.4 km' },
      { name: 'متوسطة الفلاح العالمية', length: '0.6 km' },
      { name: 'مسجد', length: '0.6 km' },
      { name: 'جامع الرضا', length: '1.2 km' },
      { name: '191	الابتدائية', length: '1.4 km' }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
