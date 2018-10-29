import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, reorderArray } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { GlobalProvider } from '../../providers/shared/global';
import { SearchProvider } from '../../providers/shared/search';
import { ListModalListItem } from '../../app/models/shared/general';
import { AddPropertyProvider } from '../../providers/property/add-property';


@IonicPage()
@Component({
  selector: 'page-list-modal',
  templateUrl: 'list-modal.html',
})
export class ListModalPage {


  listValues: Array<ListModalListItem>;

  title = "";
  listItems: {} = [];
  propertyId;
  selectedItems: Array<any> = [];

  constructor(public navCtrl: NavController,
    public globalProvider: GlobalProvider,
    public navParams: NavParams,
    public viewController: ViewController,
    public searchProvider: SearchProvider,
    public addPropertyProvider: AddPropertyProvider) {
  }

  ionViewDidLoad() {
    const lable = this.navParams.get('title');
    this.propertyId = this.navParams.get('propertyId');

    this.title = lable;

      this.listValues = this.searchProvider.modalData[this.propertyId].listValues;
      this.selectedItems = this.searchProvider.modalData[this.propertyId].values;

    for (let i = 0; i < this.listValues.length; i++) {
      const newLocal = this.listValues[i]['checked'] = this.selectedItems.filter(x => x.id === this.listValues[i].id).length > 0;
    }
  }

  goback() {
    this.navCtrl.pop();
  }

  updatePropertyTypes(propertyTypeName, propertyTypeId) {
    let item = this.selectedItems.find(v => v.id === propertyTypeId);
    let newItem = { id: propertyTypeId, name: propertyTypeName };
    if (item && item.id === newItem.id) {
      this.selectedItems.splice(this.selectedItems.findIndex(item => item.id === propertyTypeId), 1);

    } else {
      this.selectedItems.push(newItem);
    }

  }

  // here i am doing some work with if else if anybody want to set the done method same as before like defult so remove the if else
  done() {
    if (this.addPropertyProvider.addPropertyProviderActive === false) {
      this.searchProvider.modalData[this.propertyId].values = this.selectedItems;
      this.addPropertyProvider.addPropertyProviderActive = false;
      this.viewController.dismiss();
    } else {
      this.viewController.dismiss({ selected: this.selectedItems });
      this.addPropertyProvider.addPropertyProviderActive = false;
    }

  }


}
