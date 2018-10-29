import { SafeUrl } from "@angular/platform-browser";

export interface country {
    Country: string,
    CountryName: string,
    CountryNameAr: string,
    CountryNameEn: string,
    Domain: string
}

export interface countryLocaliztionData {
    COUNTRY: string,
    COUNTRY_NAME: string,
    CURRENCY: string,
    CURRENCY_NAME: string,
    MAP_CENTER: string,
    COUNTRY_ZOOM: number,
    PROVINCE_ZOOM: number,
    CITY_ZOOM: number,
    DISTRICT_ZOOM: number,
    GOOGLE_GEOCODE_CITY_PARAM: string,
    GOOGLE_GEOCODE_DISTRICT_PARAM: string,
    PROVINCE_TITLE: string,
    PROVINCES_TITLE: string,
    CITY_TITLE: string,
    DISTRICT_TITLE: string,
    SEARCH_PLACEHOLDER: string,
    SERVER_ADDRESS: string,
    SECURE_SERVER_ADDRESS: string,
    AREA_LEVELS: number,
    MOBILE_NUMBER_REGEX: string,
    MOBILE_NUMBER_EXAMPLE: string,
    GA_ACCOUNT: string

}

export interface area {
    id: number;
    AEn: string;
    AAr: string;
    pid: number;
    l: number;
    lt: number;
    ln: number;
}

export interface selectedLocation {
    selectedProvince:area;
    selectedCity: area;
    selectedDistrict: area;
}
// ........setup_data........

export interface PropertyTypeCategory {
    sid: string,
    name: string
}

export interface ListModalListItem {
    id: string,
    nameEn: string,
    nameAr: string,
    category_sid: string,
    secondaryProperties: number[]
}

export interface PropertyType {
    id: string,
    nameEn: string,
    nameAr: string,
    category_sid: string,
    secondaryProperties: Array<number>
}

export interface RentAmountPer {
    id: string,
    nameEn: string,
    nameAr: string
}


export interface ListingCategory {
    id: string,
    nameEn: string,
    nameAr: string

}

export interface RentMonth {

    id: string,
    nameEn: string,
    nameAr: string
}

export interface PropertyFinalizing {

    id: string,
    nameEn: string,
    nameAr: string
}

export interface NoOfStreets {

    id: string,
    nameEn: string,
    nameAr: string
}


export interface PropertyAge {

    id: number,
    name: string
}

export interface UserServices {

    id: string,
    nameEn: string,
    nameAr: string
}

export interface UserLanguages {

    id: string,
    nameEn: string,
    nameAr: string
}

export interface apiResult {
    success: string,
    data?: object,
    session_key?: string
}


///////////////////////

export interface Captcha {
    registrationCaptcha: any;
    registrationSecurityCode: string;
    registrationSecurityHash: any;
}


export interface CaptchaImage{
    blob:Blob;
    uri:SafeUrl
    
}


