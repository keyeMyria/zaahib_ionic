import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../shared/global';
import { ServerProvider } from '../shared/server';

@Injectable()
export class AdvertisingProvider {

  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {

  }

  async getAdvertisements<T>() {
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS + '/ajax/modules/miscellaneous/ads_handler.php',
      {
        version: '2.9.3',
        buildType: 'website',
        action: 'advertising'
      }
    );
  }

}
