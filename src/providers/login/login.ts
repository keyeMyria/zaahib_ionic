import { Injectable } from '@angular/core';
import { ServerProvider } from '../shared/server';
import { GlobalProvider } from '../shared/global';
import { UserMobileData } from '../../app/models/shared/user';


@Injectable()
export class LoginProvider {
  userMobileData:UserMobileData={
    sessionkey:'',
    mobilenumber:''
  };


  constructor(
    public serverProvider: ServerProvider,
    public globalProvider: GlobalProvider
  ) {

  }

  async authenticate<T>(user: string, password: string) {
    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/users/login.php", {
      username: user,
      password: password,
      buildType: "website"
    });
  }

  async registerUserByEmail<T>(UserRegisteration) {

    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/user/register_ajax/", {
      DisplayEmail: UserRegisteration.DisplayEmail,
      DisplayMobile: UserRegisteration.DisplayMobile,
      DisplayPhone: UserRegisteration.DisplayPhone,
      IsPrivate: UserRegisteration.IsPrivate,
      SupervisorLevel: UserRegisteration.SupervisorLevel,
      action: UserRegisteration.action,
      username: UserRegisteration.username,
      "password[original]": UserRegisteration.passwordOriginal,
      "password[confirmed]": UserRegisteration.passwordConfirmed,
      security_code: UserRegisteration.security_code,
      SecurityHash: UserRegisteration.SecurityHash
    });
  }

  async sendCode<T>() {
    
    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/users/code_verification_handler.php", {
      mode: 'send_code',
      MobileNumber: encodeURIComponent(this.userMobileData.mobilenumber),
      session_key: "",
      version: '2.9.3',
      buildType: 'website'

    });
  }

  async resendCode<T>() {
    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/users/code_verification_handler.php", {
      mode: 'resend_code',
      MobileNumber:encodeURIComponent(this.userMobileData.mobilenumber),
      session_key: this.userMobileData.sessionkey,
      version: '2.9.3',
      buildType: 'website'

    });
  }

  async verifyCode<T>(Code: string) {
    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/ajax/modules/users/code_verification_handler.php", {
      mode: 'check_code',
      MobileNumber: encodeURIComponent(this.userMobileData.mobilenumber),
      VerificationCode: Code,
      session_key: this.userMobileData.sessionkey,
      version: '2.9.3',
      buildType: 'website'

    });
  }


  async registerUserByMobile<T>(UserRegisteration) {
    return this.serverProvider.postFormData<T>(this.globalProvider.countryData.SERVER_ADDRESS + "/user/register_ajax/", {
      buildType:'website',
      version:'2.9.3',
      DisplayEmail: UserRegisteration.DisplayEmail,
      DisplayMobile: UserRegisteration.DisplayMobile,
      DisplayPhone: UserRegisteration.DisplayPhone,
      IsPrivate: UserRegisteration.IsPrivate,
      SupervisorLevel: UserRegisteration.SupervisorLevel,
      action: UserRegisteration.action,
      username: UserRegisteration.username,
      "password[original]": UserRegisteration.passwordOriginal,
      "password[confirmed]": UserRegisteration.passwordConfirmed,
      MobileNumberVerified: 1,
      MobileNumber:UserRegisteration.MobileNumber,
      email: ''
    });
  }




}
