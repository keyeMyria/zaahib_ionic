import { Injectable } from '@angular/core';
import { GlobalProvider } from '../shared/global';
import { ServerProvider } from '../shared/server';


@Injectable()
export class HelpcenterProvider {

  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {

  }


  async getHelp<T>() {

    this.globalProvider.loadDataFromLocalStorage();
    let lang=this.globalProvider.selectedLanguage;
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS + '/ajax_help_'+lang+'/',
      {
        version: '2.9.3',
        buildType: 'website',
        // /session_key:this.globalProvider.userData.session_key,
        response_mode:'ajax'
        
      }
    );
  }

}
