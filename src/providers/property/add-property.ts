import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyDetail, location, ContactDetail, street } from '../../app/models/property';
import { area } from '../../app/models/shared/general';
import { GlobalProvider } from '../shared/global';
import { listingProperties, featuresList } from '../../assets/Zaahib Global Data/setup_data';
import { AddListingAdvancedModePage } from '../../pages/add-listing-advanced-mode/add-listing-advanced-mode';



@Injectable()
export class AddPropertyProvider {

  LocationDetails: string = "";
  YouTubeVideoUrl: string = "";
  Edit: boolean = false;
  locationAndAddressActive: boolean = false;
  addPropertyProviderActive: boolean = false;

  selectedLocation: area;
  listingProperties: any;
  selectedProperties: { id: string; name: string; }[];
  isSelected: boolean;


  ExtraFeatures: Array<any> = [];

  constructor(public http: HttpClient,
    public globalProvider: GlobalProvider) {
    console.log('Hello AddPropertyProvider Provider');
    // this.selectedLocations = new Array<area>();
    this.listingProperties = listingProperties;
  }

  propertyDetails: PropertyDetail = {
    selectedPoperty: {},
    selectedCategory: 0,
    Title: "",
    Rent: 0,
    rentAmount: 0,
    Beds: 0,
    Rooms: 0,
    SquareMeter: 0,
    Price: 0,
    InstallmentsAccepted: 0,
    Baths: 0,
    PricePerSQM: 0
  }

  location: location = {
    selectedProvince: { id: 0, AEn: "", AAr: "", pid: 0, l: 0, lt: 0, ln: 0 },
    selectedCity: { id: 0, AEn: "", AAr: "", pid: 0, l: 0, lt: 0, ln: 0 },
    selectedDistrict: { id: 0, AEn: "", AAr: "", pid: 0, l: 0, lt: 0, ln: 0 },
    StreetName: "",
    BuildingNo: 0,
    ZipCode: 0,
    AdditionalNo: 0
  }

  editContact: boolean = false;
  ContactDetal: ContactDetail = {
    UseProfileForContacts: false,
    AgencyName: "",
    MobileNumber: 0,
    PhoneNumber: 0,
    Email: ""
  }

  modalData = {
    "Features": { values: [], listValues: featuresList },
  }

  selectFacing = [
    "North",
    "North East",
    "East",
    "South East",
    "South",
    "South West",
    "West",
    "North West"
  ]

  streetBinding: Array<street> = [];

  Options = {
    doNotRepostToFacebook: false,
    doNotRepostToTwitter: false
  };

  PrivateData = {
    PrivateIDforlisting: "",
    PrivateComments: ""
  };




}
