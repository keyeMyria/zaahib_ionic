import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PropertyListProvider } from '../../providers/property/property-list';
import { GlobalProvider } from '../../providers/shared/global';

@Component({
  selector: 'page-similar-properties',
  templateUrl: 'similar-properties.html',
})

export class SimilarPropertiesComponent {
  propertiesList=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public propertyListProvider:PropertyListProvider,
    public globalProvider:GlobalProvider
    ) {
    this.searchSimilarProperties();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimilarPropertiesPage');
  }

  searchSimilarProperties() {
    this.propertyListProvider.getProperties<any>(1).then(res => {
      this.propertiesList = res.listings;
     
    }).catch(err => {
      console.log(err);
    });
  }

  loadAlternateImage($event, propertyType: string) {
    let img = $event.target;
    img.src = 'assets/imgs/propertytype/' + propertyType + '_bg.jpg';

  }

}
