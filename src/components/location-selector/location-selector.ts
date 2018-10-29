import { Component, Input, Output, EventEmitter } from "@angular/core";
import { area, selectedLocation } from "../../app/models/shared/general";
import { GlobalProvider } from "../../providers/shared/global";

@Component({
    selector: "location-selector",
    templateUrl: "location-selector.html"
})

export class LocationSelectorComponent {
    @Input() title: String = "Select Location";
    areaListProvince: Array<area> = [];
    areaListCity: Array<area> = [];
    areaListDistrict: Array<area> = [];

    _selectedLocation: selectedLocation = {
        selectedCity: null,
        selectedDistrict: null,
        selectedProvince: null
    };

    @Output() change: EventEmitter<selectedLocation> = new EventEmitter<selectedLocation>();

    constructor(
        public globalProvider: GlobalProvider,
    ) {
        this.areaListProvince = this.globalProvider.areas.filter(t => t.l === 1);
    }

    emitEvent() {
        this.change.emit(this._selectedLocation);
    }

    selectProvince(selectedProvince: area) {
        this.areaListCity = this.globalProvider.areas.filter(t => t.l === 2 && t.pid === selectedProvince.id);
        this.areaListDistrict = [];
        this._selectedLocation.selectedCity = null;
        this._selectedLocation.selectedDistrict = null;
        this._selectedLocation.selectedProvince = selectedProvince;
        this.emitEvent();
    }

    selectCity(selectedCity: area) {
        this.areaListDistrict = this.globalProvider.areas.filter(t => t.l === 3 && t.pid === selectedCity.id);
        this._selectedLocation.selectedDistrict = null;
        this._selectedLocation.selectedCity = selectedCity;
        this.emitEvent();
    }

    selectDistrict(selectedDistrict: area) {
        this._selectedLocation.selectedDistrict = selectedDistrict;
        this.emitEvent();
    }


}

