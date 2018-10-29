
import { Injectable } from '@angular/core';
import { ServerProvider } from '../shared/server';
import { GlobalProvider } from '../shared/global';


@Injectable()
export class TermsOfUseProvider {


  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {

  }

  async getTermsOfUse<T>() {

    console.log("get terms");
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/miscellaneous/static_content_handler.php",
      {
        buildType: 'website',
        page: 'TermsOfUse',
        lang: this.globalProvider.selectedLanguage,
        version: '2.9.3'

      }
    );
  }

}
