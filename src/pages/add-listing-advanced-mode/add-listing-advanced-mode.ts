import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Modal } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AddListingSimpleModePage } from '../add-listing-simple-mode/add-listing-simple-mode';
import { propertyTypeList, listingCategoryList, rentAmountPerList, listingProperties, featuresList } from '../../assets/Zaahib Global Data/setup_data';
import { GlobalProvider } from '../../providers/shared/global';
import { area, selectedLocation } from '../../app/models/shared/general';
import { SearchProvider } from '../../providers/shared/search';
import { AddPropertyProvider } from '../../providers/property/add-property';
import { LocationAddressSectionPage } from '../modal/add-property/location-address-section/location-address-section';
import { ListingDetailSectionPage } from '../modal/add-property/listing-detail-section/listing-detail-section';
import { ContactDetailSectionPage } from '../modal/add-property/contact-detail-section/contact-detail-section';
import { ListModalPage } from '../list-modal/list-modal';
import { TranslateService } from '@ngx-translate/core';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

import { street } from '../../app/models/property';


//import { ContactDetailSectionPage } from '../contact-detail-section/contact-detail-section';

@IonicPage()
@Component({
  selector: 'page-add-listing-advanced-mode',
  templateUrl: 'add-listing-advanced-mode.html',
})

export class AddListingAdvancedModePage {

  truee;
  public photos: Array<any> = [];
  Facing;
  location = false;
  number: number = 1;
  privateData: boolean = false;
  Option: boolean = false;
  Streets: boolean = false;
  YouTubeVideo: boolean = false;
  pictureBoxShow: boolean = false;
  path: string;
  propertyTypeList;
  listingCategoryList;
  rentAmountPerList;
  selectedPoperty;
  selectedCategory;
  listingProperties;
  rentAmount;
  selected: any;
  featuresList = featuresList;

  searchResults: Array<{ id: number, title: string }>;
  selectedProvince: area;
  selectedCity: area;
  selectedDistrict: area;
  name: string;
  Ptitle;
  testlist: area;
  areaListProvince?= this.addPropertyProvider.location.selectedProvince;
  propertyId: any;
  showInput: boolean = false;
  extraFeatures;
  ExtraFeatures: Array<any> = [];

  street: street = { id: this.number, Width: 0, Length: 0, Facing: "" }
  streetBinding: Array<street> = [];
  streetLimit: boolean = true;
  PrivateComments: boolean = false;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public globalProvider: GlobalProvider,
    public searchProvider: SearchProvider,
    public modalController: ModalController,
    public addPropertyProvider: AddPropertyProvider,
    public translate: TranslateService,
    public imagePicker: ImagePicker,
    public camera: Camera,
    private alertCtrl: AlertController,
    private base64ToGallery: Base64ToGallery) {
    this.listingProperties = listingProperties;
    this.photos = [];
  }

  pictureBox() {
    this.pictureBoxShow = !this.pictureBoxShow;
  }

  ngOnInit() {
    
  }
  valid(value){
    if(value.length < 1 ){
      this.PrivateComments = true;
    } else{
      this.PrivateComments = false;
    }
  }

  addStreet(street) {
    console.log(street);
    this.streetBinding.push(street);
    this.number = this.number + 1;
    this.street = { id: this.number, Width: 0, Length: 0, Facing: "" };
    if (this.number == 5) {
      this.streetLimit = false;
    }
    this.addPropertyProvider.streetBinding = this.streetBinding;
    console.log(this.addPropertyProvider.streetBinding);
  }

  shInput() {
    this.showInput = true;
  }

  StreetsBinding() {
    this.Streets = true;
  }
  LocationDetails() {
    this.location = true;
  }
  Options() {
    this.Option = true;
  }
  PrivateData() {
    this.privateData = true;
  }

  addExtFeatures(extraFeatures: string) {
    if (extraFeatures != "") {
      this.ExtraFeatures.push(extraFeatures);
      this.addPropertyProvider.ExtraFeatures = this.ExtraFeatures;
      this.extraFeatures = "";
    }

  }

  removeFeature(i) {
    this.ExtraFeatures.splice(i, 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListingAdvancedModePage');
    this.propertyTypeList = propertyTypeList;
    this.listingCategoryList = listingCategoryList;
    this.rentAmountPerList = rentAmountPerList;
    this.areaListProvince = this.addPropertyProvider.location.selectedProvince;
    console.log(this.addPropertyProvider.modalData.Features.values);
    this.photos = [];
  }

  onClicked(event) {
    this.name = event;
  }

  addListingSimplePage() {
    this.navCtrl.push(AddListingSimpleModePage);
    console.log(this.selectedPoperty);
    console.log(this.selectedCategory);
  }

  // addLocation() {
  //   if (this.selectedProvince) {
  //     const areaToPush = this.selectedDistrict ? this.selectedDistrict : this.selectedCity ? this.selectedCity : this.selectedProvince;
  //     if (this.addPropertyProvider.selectedLocations.filter(x => x.id === areaToPush.id).length <= 0) {
  //       this.addPropertyProvider.selectedLocations.push(areaToPush);
  //     }
  //   }
  // }

  // dismiss() {
  //   this.viewCtrl.dismiss(this.addPropertyProvider.selectedLocations);
  // }

  push() {
    this.navCtrl.pop();
  }

  // locationChange(event: selectedLocation) {
  //   this.selectedProvince = event.selectedProvince;
  //   this.selectedCity = event.selectedCity;
  //   this.selectedDistrict = event.selectedDistrict;
  // }

  listingDetailSectionPage() {
    this.openModal(ListingDetailSectionPage);
  }

  locationAndAddressSectionPage() {
    this.openModal(LocationAddressSectionPage);

  }
  openModal(pageName, propData?) {
    let modal = this.modalController.create(pageName);
    modal.present();
  }

  contactDetailSectionPage() {
    this.openModal(ContactDetailSectionPage);
  }

  // this is from my side method

  showList(propertyId) {
    this.addPropertyProvider.addPropertyProviderActive = true;
    this.propertyId = propertyId;
    let modal: Modal;
    if (typeof this.listingProperties[propertyId] == "undefined") {
      modal = this.modalController.create(ListModalPage, {
        propertyId: propertyId,
        title: this.translate.instant(propertyId),
        listValues: this.addPropertyProvider.modalData[propertyId].listValues
      });
    }
    else {
      modal = this.modalController.create(ListModalPage, {
        propertyId: propertyId,
        title: this.globalProvider.selectedLanguage == "en" ? this.listingProperties[propertyId].nameEn : this.listingProperties[propertyId].nameAr,
        listValues: this.addPropertyProvider.modalData[propertyId].listValues
      });
    }
    modal.onDidDismiss((selected) => {
      this.selected = selected;
      this.addPropertyProvider.modalData.Features.values = this.selected;
      this.addPropertyProvider.addPropertyProviderActive = false;
    })
    modal.present();
  }

  YouTubeVideoID() {
    this.YouTubeVideo = true;
  }

  agentFilterModalPage() {
    this.navCtrl.pop();
  }

  choosePicture() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //this.photos.push(this.base64Image);
    }, (err) => {
      // Handle error
    });
  }
    // let option = {
    //   title: 'Select Picture',
    //   message: 'Select least 1 picture',
    //   maximumImagesCount: 1,
    //   outType: 1    // 0 for path and 1 for base64
    // };

    // this.imagePicker.getPictures(option).then(results => {
    //   for (var i = 0; i < results.length; i++) {
    //     this.path = results[i];
    //     alert("Gallery path : " + results[i]);
    //   }
    // }, err => {
    //   alert("error " + err);
    // })
 

  deletePicture(index) {
    let alert = this.alertCtrl.create({
      title: 'Delet Photo',
      message: 'Do you want to delete this Photo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delet',
          handler: () => {
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    alert.present();
  }
img;
  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      alert(imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.img = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);

      this.base64ToGallery.base64ToGallery(imageData).then(
  res => this.photos.push('Saved image to gallery ', res),
  
  err => console.log('Error saving image to gallery ', err)
);
alert(this.photos)

     // this.photos.push(this.base64Image);
    }, (err) => {
      // Handle error
    });
  }

    // let option: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.PNG,
    //   mediaType: this.camera.MediaType.PICTURE
    // };

    // this.camera.getPicture(option).then(url => {
    //   this.path = url;
    //   alert("Camera url is " + url);
    // }, err => {
    //   alert("error " + err);
    // });


  //  mymethod end
}
