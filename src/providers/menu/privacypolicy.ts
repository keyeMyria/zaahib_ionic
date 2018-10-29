import { Injectable } from '@angular/core';
import { GlobalProvider } from '../shared/global';
import { ServerProvider } from '../shared/server';


@Injectable()
export class PrivacypolicyProvider {

  constructor(
    public serverProvider:ServerProvider,
    public globalProvider:GlobalProvider
  ) {
    
  }

  async getPrivcacyPolicy<T>(){
    
    console.log("get policy");
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS +"/ajax/modules/miscellaneous/static_content_handler.php",
    {
      buildType:'website',
      page:'PrivacyPolicy',
      lang:this.globalProvider.selectedLanguage,
       version:'2.9.3'
    }
    );
  }

}
