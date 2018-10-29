import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../shared/global';
import { ServerProvider } from '../shared/server';
import { SearchProvider } from '../shared/search';

@Injectable()
export class PropertyListProvider {
  searchProvider: SearchProvider;
  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider,
    searchProvider: SearchProvider
  ) {
    this.searchProvider = searchProvider;
  }


  async getProperties<T>(page: number) {
    let parameters: any = this.searchProvider.getSearchParameters();
    parameters['page'] = page;
    return await this.serverProvider.getData<T>(
      this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/classifieds/search_listings.php", parameters
    );
  }

}
