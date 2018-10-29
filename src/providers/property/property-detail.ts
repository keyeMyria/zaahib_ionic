import { Injectable } from '@angular/core';
import { ServerProvider } from '../shared/server';
import { GlobalProvider } from '../shared/global';


@Injectable()
export class PropertyDetailProvider {

  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {
    
  }

  async getDetail<T>(ListingID) {
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/classifieds/display_listing_handler.php",
      {
        session_key: '',
        version: '2.9.3',
        buildType: 'website',
        lang: this.globalProvider.selectedLanguage,
        listing_id: ListingID
      }
    );
  }

}
