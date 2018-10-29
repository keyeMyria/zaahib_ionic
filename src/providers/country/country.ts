import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { country, countryLocaliztionData} from '../../app/models/shared/general';


/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryProvider {

  //selectedCountry:country;
  
 
  

  // public http: HttpClient
  constructor( public http: Http) {
    
  }




}