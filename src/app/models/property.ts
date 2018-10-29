import { area } from "./shared/general";

export interface PropertyDetail {
  selectedPoperty: any,
  selectedCategory: any,
  rentAmount: number,
  Title: string,
  Rent: number,
  Beds: number,
  Rooms: number,
  SquareMeter: number,
  Price: number,
  InstallmentsAccepted: number,
  Baths: number,
  PricePerSQM: number
}

export interface location {
  selectedProvince: area,
  selectedCity?: area,
  selectedDistrict?: area,
  StreetName: string,
  BuildingNo: number,
  ZipCode: number,
  AdditionalNo: number
}

export interface ContactDetail {
  UseProfileForContacts: boolean,
  AgencyName: string,
  MobileNumber: number,
  PhoneNumber: number,
  Email: string
}

export interface street { id : number, Width: number, Length: number, Facing: string }
