import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerProvider } from '../shared/server';
import { GlobalProvider } from '../shared/global';
import { Md5 } from 'ts-md5/dist/md5';
import { Captcha } from '../../app/models/shared/general';

/*
  Generated class for the CaptchaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CaptchaProvider {

  constructor(public http: HttpClient,
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {
    console.log('Hello CaptchaProvider Provider');
  }

  async getCaptcha(): Promise<Captcha> {

    var code = Math.floor((Math.random() * 989999) + 10000);
    return await this.serverProvider.getImage(this.globalProvider.countryData.SERVER_ADDRESS + '/ajax/modules/miscellaneous/captcha_handler.php?code=' + code +'&'
      + 'f=' + Math.floor((Math.random() * 8999) + 1000)).then((captchaImage) => {
        var md5 = new Md5();
        md5.appendStr(code.toString());
        let data: Captcha = {
          registrationCaptcha: captchaImage.uri,
          registrationSecurityHash: md5.end(),
          registrationSecurityCode: ""
        };
        return data;
      }).then(res => res);

  }
}
