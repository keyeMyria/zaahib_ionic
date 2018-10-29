import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserRegisteration, UserData } from '../../../../app/models/shared/user';
import { UtilitiesProvider } from '../../../../providers/shared/utilities';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginProvider } from '../../../../providers/login/login';
import { GlobalProvider } from '../../../../providers/shared/global';
import { HomePage } from '../../../home/home';

@IonicPage()
@Component({
  selector: 'page-register-mobile-username',
  templateUrl: 'register-mobile-username.html',
})
export class RegisterMobileUsernamePage {
  registrationData: UserRegisteration = {
    DisplayEmail: 1,
    DisplayMobile: 1,
    DisplayPhone: 1,
    IsPrivate: 0,
    SupervisorLevel: 0,
    action: 'register',
    username: '',
    passwordOriginal: '',
    passwordConfirmed: '',
    MobileNumber: '',

  };

  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)

  });


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public utilityProvider: UtilitiesProvider,
    public loginProvider: LoginProvider,
    public globalProvider: GlobalProvider
  ) {
  }

  ionViewDidLoad() {


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  registerUser() {
    this.populateRegistrationObject();
    if (this.registrationData.passwordOriginal == this.registrationData.passwordConfirmed) {
      this.utilityProvider.showLoader();
      this.loginProvider.registerUserByMobile<UserData>(this.registrationData).then(res => {
        this.utilityProvider.hideLoader();
        this.registrationForm.reset();
        this.globalProvider.userData = res;
        if (this.globalProvider.userData.success === "1") {
          window.localStorage.current_user_json = JSON.stringify(this.globalProvider.userData.user);
          window.localStorage.session_key = this.globalProvider.userData.session_key;
          this.globalProvider.isUserAuthenticated();
          this.utilityProvider.presentToast("Registration Successful", "success-toast");
          this.navCtrl.popToRoot();
        }
        else {
          this.utilityProvider.presentToast("Registration Failed", "fail-toast");
        }
      });
    }
    else {
      this.utilityProvider.presentToast("passwords doesn't match", "fail-toast");
    }
  }

  get username() { return this.registrationForm.get('username'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  populateRegistrationObject() {
    this.registrationData.username = this.username.value;
    this.registrationData.passwordOriginal = this.password.value;
    this.registrationData.passwordConfirmed = this.confirmPassword.value;
    this.registrationData.MobileNumber = this.loginProvider.userMobileData.mobilenumber;
  }

}
