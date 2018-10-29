import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { propertyTypeList, listingCategoryList, rentAmountPerList, listingProperties } from '../../../../assets/Zaahib Global Data/setup_data';
import { GlobalProvider } from '../../../../providers/shared/global';
import { SearchProvider } from '../../../../providers/shared/search';
import { AddListingSimpleModePage } from '../../../add-listing-simple-mode/add-listing-simple-mode';
import { PropertyDetail } from '../../../../app/models/property';
import { AddPropertyProvider } from '../../../../providers/property/add-property';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';



@IonicPage()
@Component({
  selector: 'page-listing-detail-section',
  templateUrl: 'listing-detail-section.html',
})
export class ListingDetailSectionPage {

  isRent = false;


  isValidTitle = true;
  isValidRent = true;
  isValidBeds = true;
  isValidRooms = true;
  isValidSquareMeter = true;
  isValidPrice = true;
  isValidBaths = true;
  isValidPricePerSQM = true;

  listingProperties = listingProperties;
  propertyTypeList = propertyTypeList;
  listingCategoryList = listingCategoryList;
  rentAmountPerList = rentAmountPerList;
  validationMessage: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public viewController: ViewController,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider,
    public utilitiesProvider: UtilitiesProvider,
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
  isValidCatagoryAndTypes = () => {
  }
  done() {
    if (this.addPropertyProvider.propertyDetails.selectedPoperty.id > 0) {
      this.addPropertyProvider.Edit = true;
    } else {
      this.addPropertyProvider.Edit = false;
    }
    // if( this.isValidTitle == true &&
    //   this.isValidRent == true &&
    //   this.isValidBeds == true &&
    //   this.isValidRooms == true  &&
    //   this.isValidSquareMeter == true  &&
    //   this.isValidPrice == true  &&
    //   this.isValidBaths == true  &&
    //   this.isValidPricePerSQM == true){
    //     this.viewController.dismiss();
    //   }else{
    //     this.utilitiesProvider.presentToast("Please put data", "fail-toast");        
    //   }

    if (this.addPropertyProvider.propertyDetails.selectedCategory.id < 1) {
      // this.utilitiesProvider.presentToast("Please Select Property Category", "fail-toast");
    }

    if (this.addPropertyProvider.propertyDetails.selectedCategory.id == 154) {
      if (this.addPropertyProvider.propertyDetails.Rent < 1) {
        this.isValidRent = false;
        // this.utilitiesProvider.presentToast("Please Enter Rent", "fail-toast");
      } else {
        this.isValidRent = true;
      }
    }

    if (this.addPropertyProvider.propertyDetails.selectedCategory.id == 153) {
      if (this.addPropertyProvider.propertyDetails.Price < 1) {
        this.isValidPrice = false;
        // this.utilitiesProvider.presentToast("Please Enter Price", "fail-toast");
      } else {
        this.isValidPrice = true;
      }
    }

    if (this.listingProperties.Beds.show.indexOf(this.addPropertyProvider.propertyDetails.selectedPoperty.id) != -1) {
      if (this.addPropertyProvider.propertyDetails.Beds < 1) {
        this.isValidBeds = false;
        // this.utilitiesProvider.presentToast("Please Enter Bed", "fail-toast");
      } else {
        this.isValidBeds = true;
      }
    }

    if (this.listingProperties.Rooms.show.indexOf(this.addPropertyProvider.propertyDetails.selectedPoperty.id) != -1) {
      if (this.addPropertyProvider.propertyDetails.Rooms < 1) {
        this.isValidRooms = false;
        // this.utilitiesProvider.presentToast("Please Enter Room", "fail-toast");
      } else {
        this.isValidRooms = true;
      }
    }

    if (this.listingProperties.SquareMeter.show.indexOf(this.addPropertyProvider.propertyDetails.selectedPoperty.id) != -1) {
      if (this.addPropertyProvider.propertyDetails.SquareMeter < 1) {
        this.isValidSquareMeter = false;
        // this.utilitiesProvider.presentToast("Please Enter Square Meter", "fail-toast");
      } else {
        this.isValidSquareMeter = true;
      }
    }

    if (this.listingProperties.Baths.show.indexOf(this.addPropertyProvider.propertyDetails.selectedPoperty) != -1) {
      if (this.addPropertyProvider.propertyDetails.Baths < 1) {
        this.isValidBaths = false;
        // this.utilitiesProvider.presentToast("Please Enter Baths", "fail-toast");
        return false;
      } else {
        this.isValidBaths = true;
      }
    }

    if (this.listingProperties.PricePerSQM.show.indexOf(this.addPropertyProvider.propertyDetails.selectedPoperty) != -1) {
      if (this.addPropertyProvider.propertyDetails.PricePerSQM < 1) {
        this.isValidPricePerSQM = false;
        // this.utilitiesProvider.presentToast("Please Enter Price Per SQM", "fail-toast");
        return false;
      } else {
        this.isValidPricePerSQM = true;
      }
    }

    if (this.addPropertyProvider.propertyDetails.selectedPoperty.id < 1) {
      // this.utilitiesProvider.presentToast("Please Select Property Type", "fail-toast");
    }

    if (this.addPropertyProvider.propertyDetails.Title == '') {
      // this.utilitiesProvider.presentToast("Please Enter Ad Title", "fail-toast");
      this.isValidTitle = false;
    }else{
      this.isValidTitle = true;
    }


 
    console.log(this.addPropertyProvider.propertyDetails);

    if (this.addPropertyProvider.propertyDetails.selectedCategory.id > 1) {

      if (this.addPropertyProvider.propertyDetails.selectedPoperty.id > 1) {

        if (this.addPropertyProvider.propertyDetails.Title != '') {

          if (this.isValidRent == true) {

            if (this.isValidBeds == true) {

              if (this.isValidRooms == true) {

                if (this.isValidSquareMeter == true) {

                  if (this.isValidPrice == true) {

                    if (this.isValidBaths == true) {

                      if (this.isValidPricePerSQM == true) {
                        this.viewController.dismiss();
                        console.log("viewController");
                      }
                      else {
                        this.utilitiesProvider.presentToast("Please Enter Price Per SQM", "fail-toast");
                      }
                    }
                    else {
                      this.utilitiesProvider.presentToast("Please Enter Baths", "fail-toast");
                    }
                  }
                  else {
                    this.utilitiesProvider.presentToast("Please Enter Price", "fail-toast");
                  }
                }
                else {
                  this.utilitiesProvider.presentToast("Please Enter Square Meter", "fail-toast");
                }
              }
              else {
                this.utilitiesProvider.presentToast("Please Enter Room", "fail-toast");
              }
            }
            else {
              this.utilitiesProvider.presentToast("Please Enter Bed", "fail-toast");
            }
          }
          else {
            this.utilitiesProvider.presentToast("Please Enter Rent", "fail-toast");
          }
        }
        else {
          this.utilitiesProvider.presentToast("Please Enter Ad Title", "fail-toast");
        }
      }
      else {
        this.utilitiesProvider.presentToast("Please Select Property Type", "fail-toast");
      }
    }
    else {
      this.utilitiesProvider.presentToast("Please Select Property Category", "fail-toast");
    }
  }

  listingDetailSectionPage() {
    let modal = this.modalController.create(ListingDetailSectionPage);
    modal.present();
  }

  rent() {
    if (this.addPropertyProvider.propertyDetails.Rent < 1 && this.addPropertyProvider.propertyDetails.selectedCategory.id == 154) {
      this.isValidRent = false;
    } else {
      this.isValidRent = true;
    }
  }

  beds() {
    if (this.addPropertyProvider.propertyDetails.Beds < 1) {
      this.isValidBeds = false;
    } else {
      this.isValidBeds = true;
    }
  }

  rooms() {
    if (this.addPropertyProvider.propertyDetails.Rooms < 1) {
      this.isValidRooms = false;
    } else {
      this.isValidRooms = true;
    }
  }

  squareMeter() {
    if (this.addPropertyProvider.propertyDetails.SquareMeter < 1) {
      this.isValidSquareMeter = false;
    } else {
      this.isValidSquareMeter = true;
    }
  }

  price() {
    if (this.addPropertyProvider.propertyDetails.Price < 1) {
      this.isValidPrice = false;
    } else {
      this.isValidPrice = true;
    }
  }

  baths() {
    if (this.addPropertyProvider.propertyDetails.Baths < 1) {
      this.isValidBaths = false;
    } else {
      this.isValidBaths = true;
    }
  }

  pricePerSQM() {
    if (this.addPropertyProvider.propertyDetails.PricePerSQM < 1) {
      this.isValidPricePerSQM = false;
    } else {
      this.isValidPricePerSQM = true;
    }
  }

}
