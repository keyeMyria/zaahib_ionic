import { Injectable } from "@angular/core";
import { area } from "../../app/models/shared/general";
import { GlobalProvider } from "./global";
import { ServerProvider } from '../shared/server';
import { listingProperties, propertyTypeList, propertyFinalizingList, rentAmountPerList, featuresList, userServices, userLanguages } from '../../assets/Zaahib Global Data/setup_data';


@Injectable()
export class SearchProvider {
    selectedLocations: Array<area> = [];

    modalData = {
        "ListingCategory": 153,
        "Price": { min: 0, max: 1000000000, lower:0, upper:0, isDataValid: false, type: 'Range' },
        "Rent": { min: 0, max: 10000000,  lower:0, upper:0, isDataValid: false, type: 'Range' },
        "SquareMeter": { min: 0, max: 1000000, lower:0, upper:0, isDataValid: false, type: 'Range' },
        "Beds": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "Baths": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "GarageSize": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "PropertyAge": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "OfficeRooms": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "Rooms": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "Units": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "NumberOfLevels": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "LevelNo": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "Streets": { min: 0, max: 0, isDataValid: false, type: 'FromTo' },
        "DateSelectorModalPage": { from: "", to: "", type: 'DateRange' },
        "Type": { values: [], listValues: propertyTypeList, type: 'List', ParamId: 'PropertyType' },
        "PropertyFinalizing": { values: [], listValues: propertyFinalizingList, type: 'List', ParamId: 'PropertyFinalizing' },
        "Per": { values: [], listValues: rentAmountPerList, type: 'List', ParamId: 'RentAmountPer' },
        "Features": { values: [], listValues: featuresList, type: 'Features' },
        "AgencyLanguages": { values: [], listValues: userLanguages, title: 'Languages', type: 'List' },
        "AgencyServices": { values: [], listValues: userServices, title: 'Services', type: 'List' },
        "Keywords": "",
        "OnlyListingsWithPictures": false
      }

      listingProperties: any;
      selectedProperties: { id: string; name: string; }[];
      isSelected: boolean;
      numberOfFilters: number = 1;



    constructor(
        public serverProvider: ServerProvider,
        public globalProvider : GlobalProvider,
    ) {
        this.selectedLocations = new Array<area>();
        this.listingProperties = listingProperties;

    }

    getLocationName(areaIn: area) {
        let areaName: string = "";
        if (areaIn.l === 1) {
            areaName = areaIn.AEn;
        } else if (areaIn.l === 2) {
            let parent = this.globalProvider.areas.filter(x => x.id === areaIn.pid)[0];
            areaName = areaIn.AEn + ", " + parent.AEn;
        } else if (areaIn.l === 3) {
            let parent = this.globalProvider.areas.filter(x => x.id === areaIn.pid)[0];
            areaName = areaIn.AEn + ", " + parent.AEn + ", " + this.globalProvider.areas.filter(x => x.id === parent.pid)[0].AEn;
        }
        return areaName
    }

    removeLocation(location: area) {
        this.selectedLocations.splice(this.selectedLocations.findIndex(x => x.id === location.id), 1);
    }

    getSearchParameters() {
        let parameters: any = {
            sf: 'yes', version: '2.9.3', buildType: 'website', lang: this.globalProvider.selectedLanguage,
            'ListingCategory[in]': this.modalData.ListingCategory
        };

        if (this.modalData.Keywords != '') {
            parameters['keywords[contains]'] = this.modalData.Keywords;
            this.numberOfFilters++;
        }

        if (this.selectedLocations.length > 0) {
            parameters['Province_City_District[in]'] = this.selectedLocations.map(e => e.id).join(",");
            this.numberOfFilters++;
        }

        if (this.modalData.DateSelectorModalPage.from != '') {
            parameters['activation_date[not_earlier]'] = 
                this.modalData.DateSelectorModalPage.from.substring(5) + '-' + this.modalData.DateSelectorModalPage.from.substring(0, 4);
            this.numberOfFilters++;
        }

        if (this.modalData.DateSelectorModalPage.to != '') {
            parameters['activation_date[not_later]'] = 
                this.modalData.DateSelectorModalPage.to.substring(5) + '-' + this.modalData.DateSelectorModalPage.to.substring(0, 4);
            this.numberOfFilters++;
        }

        if (this.modalData.OnlyListingsWithPictures) {
            parameters['pictures[more]'] = 0;
            this.numberOfFilters++;
        }

        for (let paramId in this.modalData) {
            if (this.modalData[paramId].type == "Range") {
                if (this.modalData[paramId].lower != this.modalData[paramId].min || 
                    (this.modalData[paramId].upper != this.modalData[paramId].max && this.modalData[paramId].upper != 0)) {
                    parameters[paramId + '[composite_between]'] = this.modalData[paramId].lower + ';' + this.modalData[paramId].upper;
                    this.numberOfFilters++;
                }
            }
            else if (this.modalData[paramId].type == "FromTo") {
                if (this.modalData[paramId].min != 0 || this.modalData[paramId].max != 0) {
                    parameters[paramId + '[composite_between]'] = this.modalData[paramId].min + ';' + this.modalData[paramId].max;
                    this.numberOfFilters++;
                }
            }
            else if (this.modalData[paramId].type == "List" && this.modalData[paramId].values.length > 0) {
                parameters[this.modalData[paramId].ParamId + '[in]'] = this.modalData[paramId].values.map(e => e.id).join(",");
                this.numberOfFilters++;
            }
            else if (this.modalData[paramId].type == "Features" && this.modalData[paramId].values.length > 0) {
                console.log(this.modalData[paramId].values);
                for (let index = 0; index < this.modalData[paramId].values.length; index++) {
                    parameters[this.modalData[paramId].values[index].id + '[equal]'] = 1;
                    this.numberOfFilters++;
                }
            }
        }

        return parameters;
    }
}