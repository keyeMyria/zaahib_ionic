import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-features',
  templateUrl: 'features.html',
})
export class FeaturesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturesPage');
  }

  features = {
    icons: [
      { url: '../../assets/icon/electicity.svg', name: 'Electicity' },
      { url: '../../assets/icon/water.svg', name: 'Water' },
      { url: '../../assets/icon/gaz.svg', name: 'Gaz' },
      { url: '../../assets/icon/phone.svg', name: 'Phone' },
      { url: '../../assets/icon/internet.svg', name: 'Internet' },
      { url: '../../assets/icon/furnished.svg', name: 'Furnished' },
      { url: '../../assets/icon/basement.svg', name: 'Basement' },
      { url: '../../assets/icon/swimming-pool.svg', name: 'Swimming Pool' },
      { url: '../../assets/icon/modern-design.svg', name: 'Modern Design' },
      { url: '../../assets/icon/ac.svg', name: 'AC' },
      { url: '../../assets/icon/central-ac.svg', name: 'Central AC' },
      { url: '../../assets/icon/full-kitchen.svg', name: 'Full Kitchen' },
      { url: '../../assets/icon/jacuzzi.svg', name: 'Jacuzzi' },
      { url: '../../assets/icon/disability-features.svg', name: 'Disability Features' },
      { url: '../../assets/icon/external-extension.svg', name: 'External Extension' },
      { url: '../../assets/icon/room-for-maid.svg', name: 'Room for Maid' },
      { url: '../../assets/icon/room-for-driver.svg', name: 'Room for Driver' },
      { url: '../../assets/icon/storage-room.svg', name: 'Storage Room' },
      { url: '../../assets/icon/security-guards.svg', name: 'Security Guards' },
      { url: '../../assets/icon/security-cameras.svg', name: 'Security Cameras' },
      { url: '../../assets/icon/security-room.svg', name: 'Security Room' },
      { url: '../../assets/icon/fireplace.svg', name: 'Firepalce' },
      { url: '../../assets/icon/residental.svg', name: 'Residential' },
      { url: '../../assets/icon/commercial.svg', name: 'Commercial' },
      { url: '../../assets/icon/workers-residence.svg', name: 'Workers Residence' },
      { url: '../../assets/icon/singles-friendly.svg', name: 'Singles Friendly' },
      { url: '../../assets/icon/city-view.svg', name: 'City View' },
      { url: '../../assets/icon/sea-view.svg', name: 'Sea View' },
      { url: '../../assets/icon/waterfront.svg', name: 'Waterfront' },
      { url: '../../assets/icon/garden.svg', name: 'Garden' },
      { url: '../../assets/icon/elevator.svg', name: 'Elevator' },
      { url: '../../assets/icon/open-space-style.svg', name: 'Open Space Style' },
      { url: '../../assets/icon/hall.svg', name: 'Hall' },
      { url: '../../assets/icon/new.svg', name: 'New Build, Not Used' }
    ]
  }

  goBack() {
    this.navCtrl.pop();
  }

}
