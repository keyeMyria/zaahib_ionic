import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Captcha } from '../../../../app/models/shared/general';
import { CaptchaProvider } from '../../../../providers/captcha/captcha';
import { LoginProvider } from '../../../../providers/login/login';
import { GlobalProvider } from '../../../../providers/shared/global';
import { UserData, UserRegisteration } from '../../../../app/models/shared/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';

@IonicPage()
@Component({
  selector: 'page-register-email',
  templateUrl: 'register-email.html',
})
export class RegisterEmailModalPage {
  captchaData: Captcha = {
    registrationCaptcha: "",
    registrationSecurityCode: "",
    registrationSecurityHash: ""
  };
  userRegistrationData: UserRegisteration = {
    DisplayEmail: 1,
    DisplayMobile: 1,
    DisplayPhone: 1,
    IsPrivate: 0,
    SupervisorLevel: 0,
    action: 'register',
    username: '',
    passwordOriginal: '',
    passwordConfirmed: '',
    security_code: '',
    SecurityHash: ''

  };

  registrationForm= new FormGroup({
    username:new FormControl('', [Validators.required, Validators.email]),
    password:new  FormControl('', Validators.required),
    confirmPassword:new FormControl('', Validators.required),
    securityCode:new FormControl('',Validators.required)

    
  });


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public captchaProvider: CaptchaProvider,
    public loginProvider: LoginProvider,
    public globalProvider: GlobalProvider,
    public utilityProvider: UtilitiesProvider
  ) {
  }

  

  ionViewDidLoad() {
    this.generateCaptcha();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  refreshCaptcha() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captchaProvider.getCaptcha().then(res => {
      this.captchaData = res;
      this.userRegistrationData.SecurityHash = this.captchaData.registrationSecurityHash;
    }).catch(err => {
      console.log(err);
    });
  }


  async registerUser() {
    
    this.populateRegistrationObject();
    if (this.validateForm()) {
      this.loginProvider.registerUserByEmail<UserData>(this.userRegistrationData).then(res => {
        this.reset();
         this.globalProvider.userData = res;
        if (this.globalProvider.userData.success === "1"){
           window.localStorage.current_user_json=JSON.stringify(this.globalProvider.userData.user);
          window.localStorage.session_key=this.globalProvider.userData.session_key;
          this.globalProvider.isUserAuthenticated();
          this.utilityProvider.presentToast("Registration Successful", "success-toast");
          this.dismiss();
         }

      }).catch(err => {
        console.log(err);
      });
      

    }

  }

  validateCaptcha() {
    var md5 = new Md5();
    md5.appendAsciiStr(this.userRegistrationData.security_code)
    let newHash = md5.end();
    if (newHash === this.userRegistrationData.SecurityHash) {
      return true;
    }
    else {
      this.utilityProvider.presentToast("invalid captcha", "fail-toast");
    }
  }

  reset() {
    this.userRegistrationData.username = "";
    this.userRegistrationData.passwordOriginal = "";
    this.userRegistrationData.passwordConfirmed = "";
    this.userRegistrationData.security_code = "";
    this.userRegistrationData.SecurityHash = "";
    this.generateCaptcha();
  }


  validateForm() {
    if(this.userRegistrationData.passwordOriginal== this.userRegistrationData.passwordConfirmed){
      if(this.validateCaptcha())
        return true;
        else 
        this.utilityProvider.presentToast("Invalid Captcha","fail-toast");
        return false;
      
    }
    else{
      this.utilityProvider.presentToast("Password doesn't match","fail-toast");
      return false;
    }
  }

  get username() { return this.registrationForm.get('username'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }
  get securityCode() { return this.registrationForm.get('securityCode'); }

  populateRegistrationObject(){
    
    this.userRegistrationData.username=this.username.value;
    this.userRegistrationData.passwordOriginal=this.password.value;
    this.userRegistrationData.passwordConfirmed=this.confirmPassword.value;
    this.userRegistrationData.security_code=this.securityCode.value;
  }


}
