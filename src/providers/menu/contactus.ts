import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../shared/global';
import { ServerProvider } from '../shared/server';
import { ContactUsPage } from '../../pages/contact-us/contact-us';
import { ContactUs } from '../../app/models/contact';
import { CaptchaProvider } from '../captcha/captcha';

@Injectable()
export class ContactusProvider {

  constructor(public http: HttpClient,
    public serverProvider:ServerProvider,
    public globalProvider:GlobalProvider,
    public captchaProvider:CaptchaProvider
    ) {

    console.log('Hello ContactusProvider Provider');
  }

  async getContactUs<T>(){
    return await this.serverProvider.getData<T>(this.globalProvider.countryData.SERVER_ADDRESS +"/system/miscellaneous/countries/",
    {
      buildType:'website',
      country:'sa',
     
       version:'2.9.3'
    }
    );
  }


  async sendEmail<T>(contactData:ContactUs){
    let lang=this.globalProvider.selectedLanguage;
    return await this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + '/ajax_contact_'+lang+'/',
    {
      action: 'send_message',
      name: contactData.name,
      email: contactData.email,
      category: contactData.category,
      comments: contactData.comments,
      security_code: contactData.security_code,
      SecurityHash: contactData.security_hash
    }
    );
  }

}
