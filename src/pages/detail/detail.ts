import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';

import { FeaturesPage } from '../features/features';
import { ContactsDetailPage } from '../contacts-detail/contacts-detail';
import { MapDetailPage } from '../map-detail/map-detail';
import { PropertyDetailProvider } from '../../providers/property/property-detail';
import { UtilitiesProvider } from '../../providers/shared/utilities';
import { GlobalProvider } from '../../providers/shared/global';
import L, { Icon } from 'leaflet';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  QRcodeUrl: string;
  details: any;
  detectLanguage: string = this.globalProvider.selectedLanguage;
  comment: boolean = false;
  map: L.Map;
  center: L.PointTuple;
  fav:boolean = false;

  tileUrl: string;
  satelliteTileUrl: string;
  tileLayer: any;
  satelliteTileLayer: any;

  @ViewChild('sliderOne') sliderOne: Slides;
  @ViewChild('sliderTwo') sliderTwo: Slides;
  @ViewChild('sliderThree') sliderThree: Slides;
  @ViewChild(Slides) slides: Slides;


  pages = [ContactsDetailPage, MapDetailPage, FeaturesPage,];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public detailProvider: PropertyDetailProvider,
    public utilityProvider: UtilitiesProvider,
    public globalProvider: GlobalProvider,
    public platform: Platform,
    private inAppBrowser: InAppBrowser
   
   
  ) {
  }

  ionViewDidLoad() {
    let listingID = this.navParams.data;
    this.getDetail(listingID);
    this.generateQRcodeUrl(listingID);

    this.loadMap();
  }

  loadMap() {
    if (this.globalProvider.selectedLanguage === "en") {
      this.tileUrl = "https://{s}.googleapis.com/vt?lyrs=m@174225136&src=apiv3&hl=en-US&x={x}&y={y}&z={z}&s=Galile&style=api%7Csmartmaps";
      this.satelliteTileUrl = "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&src=apiv3&hl=en-US&s=Galile&style=api%7Csmartmaps";
    }
    else {
      this.tileUrl = "https://{s}.googleapis.com/vt?lyrs=m@174225136&src=apiv3&hl=ar-SA&x={x}&y={y}&z={z}&s=Galile&style=api%7Csmartmaps";
      this.satelliteTileUrl = "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&src=apiv3&hl=ar-SA&s=Galile&style=api%7Csmartmaps";
    }
    let tileAttr = "Map data © " + new Date().getFullYear() + " Google";
   
    if (typeof document.getElementById('leafletmap') != "undefined" && document.getElementById('leafletmap') != null) {
      let mapcenter = this.globalProvider.countryData.MAP_CENTER.split(",");
      this.center = [parseFloat(mapcenter[0]), parseFloat(mapcenter[1])];

      this.tileLayer = L.tileLayer(this.tileUrl, { attribution: tileAttr, subdomains: ['mt0', 'mt1'], maxZoom: 22 });
      this.satelliteTileLayer = L.tileLayer(this.satelliteTileUrl, { maxZoom: 22, subdomains: ['mt1'], attribution: tileAttr });
      this.map = L.map('leafletmap', {
        center: this.center,
        zoom: 10,
        minZoom: 4,
        maxZoom: 20,
        layers: this.tileLayer
      });

      if (this.details.listing.Longitude !== "" && this.details.listing.Latitude !== "") {
        let iconname = new L.Icon({ iconUrl: 'assets/imgs/mapicons/MapPointer.png', iconSize: [20, 40], iconAnchor: [16, 37] });
        L.marker([parseFloat(this.details.listing.Latitude), parseFloat(this.details.listing.Longitude)], { icon: iconname }).addTo(this.map);

      }
      else {
      let polygondata: Array<any> = [];
      for (let i = 0; i < this.details.boundaryCoordinates.length; i++) {
        let boundary = new Array(parseFloat(this.details.boundaryCoordinates[i].Latitude), parseFloat(this.details.boundaryCoordinates[i].Longitude));
        polygondata.push(boundary);
  }
      let poly = L.polygon(polygondata).addTo(this.map);
      this.map.fitBounds(poly.getBounds());
      }
      for (let i = 0; i < this.details.poiNear.length; i++) {
        let iconname = new L.Icon({ iconUrl: 'assets/imgs/mapicons/poi' + this.details.poiNear[i].Category_SID + '.png', iconSize: [32, 37], iconAnchor: [16, 37] });
        L.marker([parseFloat(this.details.poiNear[i].Latitude), parseFloat(this.details.poiNear[i].Longitude)], { icon: iconname }).addTo(this.map);

      }
    }
    else {
      setTimeout(function (obj) { obj.loadMap(); }, 500, this);
    }
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  switchToTerrainMode = function () {
    this.map.addLayer(this.tileLayer);
    this.map.removeLayer(this.satelliteTileLayer);
    document.getElementById('btnMap').classList.add("active");
    document.getElementById('btnSatellite').classList.remove("active");
  }

  switchToSatelliteMode = function () {
    this.map.addLayer(this.satelliteTileLayer);
    this.map.removeLayer(this.tileLayer);
    document.getElementById('btnSatellite').classList.add("active");
    document.getElementById('btnMap').classList.remove("active");
  }

  goBack() {
    this.navCtrl.pop();
  }

  pushPage(a) {
    let index = a;
    this.navCtrl.push(this.pages[index]);
  }

  getDetail(ListingID) {
    this.utilityProvider.showLoader();
    this.detailProvider.getDetail<any>(ListingID).then(res => {
      this.details = res;
      this.utilityProvider.hideLoader();

    }).catch(err => {
      console.log(err);
    });
  }

  generateQRcodeUrl(listingID) {
    this.QRcodeUrl = listingID.split('').join('/');
    console.log(this.QRcodeUrl);

  }

  getDirections() {

    let url = this.getDirectionLink();
    const browser = this.inAppBrowser.create(url);
    browser.show();
  }

  getDirectionLink() {
    let url = "";
    if (this.details.listing.Latitude !== null && this.details.listing.Latitude != '' && this.details.listing.Longitude != null && this.details.listing.Longitude != '')
      url = "https://maps.google.com" + "." + this.globalProvider.country + "/?saddr=" + encodeURI(this.details.listing['Province' + this.ucfirst(this.globalProvider.selectedLanguage)]) + "&daddr=" + this.details.listing.Latitude + "%2C" + this.details.listing.Longitude + '&hl=' + this.globalProvider.selectedLanguage + '-' + this.globalProvider.selectedLanguage;
    else
      url = "https://maps.google.com" + "." + this.globalProvider.country + "/?saddr=" + encodeURI(this.details.listing['Province' + this.ucfirst(this.globalProvider.selectedLanguage)]) + "&daddr=" + (this.details.listing['StreetName' + this.ucfirst(this.globalProvider.selectedLanguage)] != "" ? encodeURI(this.details.listing['StreetName' + this.ucfirst(this.globalProvider.selectedLanguage)]) + "," : "") + (this.details.listing.ZipCode != "" ? encodeURI(this.details.listing.ZipCode) + "," : "") + (this.details.listing['District' + this.ucfirst(this.globalProvider.selectedLanguage)] != "" ? encodeURI(this.details.listing['District' + this.ucfirst(this.globalProvider.selectedLanguage)]) + "," : "") + (this.details.listing['City' + this.ucfirst(this.globalProvider.selectedLanguage)] != "" ? encodeURI(this.details.listing['City' + this.ucfirst(this.globalProvider.selectedLanguage)]) + "," : "") + '&hl=' + this.globalProvider.selectedLanguage;
    return url;
  }

  ucfirst(lang) {
    let ucFirstValues = lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
    return ucFirstValues;
  }
}
