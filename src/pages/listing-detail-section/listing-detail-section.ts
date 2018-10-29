import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { propertyTypeList, listingCategoryList, rentAmountPerList, listingProperties } from '../../assets/Zaahib Global Data/setup_data';
import { GlobalProvider } from '../../providers/shared/global';
import { SearchProvider } from '../../providers/shared/search';
import { AddListingSimpleModePage } from '../add-listing-simple-mode/add-listing-simple-mode';
import { PropertyDetail } from '../../app/models/property';
import { AddPropertyProvider } from '../../providers/property/add-property';



@IonicPage()
@Component({
  selector: 'page-listing-detail-section',
  templateUrl: 'listing-detail-section.html',
})
export class ListingDetailSectionPage {

  listingProperties = listingProperties;
  propertyTypeList = propertyTypeList;
  listingCategoryList = listingCategoryList;
  rentAmountPerList = rentAmountPerList;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public viewController: ViewController,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider,
    public addPropertyProvider: AddPropertyProvider) {
    this.listingProperties = listingProperties;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingDetailSectionPage');
    // this.propertyTypeList = propertyTypeList;
    // this.listingCategoryList = listingCategoryList;
    // this.rentAmountPerList = rentAmountPerList;
  }

  addListingSimplePage() {
    this.navCtrl.push(AddListingSimpleModePage);

  }

  done() {
    //this.addPropertyProvider.propertyDetails = this.propertyDetails;
    if(this.addPropertyProvider.propertyDetails.selectedPoperty.id >0){
      this.addPropertyProvider.Edit = true;
    }else{
      this.addPropertyProvider.Edit = false;
    }

    console.log(this.addPropertyProvider.propertyDetails);

    // console.log(this.addPropertyProvider.propertyDetails)
    // console.log(this.propertyDetails.selectedPoperty);

    this.viewController.dismiss();
  }

  listingDetailSectionPage() {
    let modal = this.modalController.create(ListingDetailSectionPage);
    modal.present();
  }



}
