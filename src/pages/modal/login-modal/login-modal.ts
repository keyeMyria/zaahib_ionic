import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginProvider } from '../../../providers/login/login';
import { UserData } from '../../../app/models/shared/user';
import { GlobalProvider } from '../../../providers/shared/global';
import { UtilitiesProvider } from '../../../providers/shared/utilities';
import { Validators, FormControl, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})


export class LoginModalPage {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),

  });

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public translate: TranslateService,
    public loginProvider: LoginProvider,
    private toastCtrl: ToastController,
    public globalProvider: GlobalProvider,
    public utilitiesProvider: UtilitiesProvider,
  ) {
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  async authenticateForm() {
    this.utilitiesProvider.showLoader();
    this.loginProvider.authenticate<UserData>(this.username.value, this.password.value).then(res => {
      this.globalProvider.userData = res;
      this, this.utilitiesProvider.hideLoader();
      if (this.globalProvider.userData.success === "1") {
        window.localStorage.current_user_json = JSON.stringify(this.globalProvider.userData.user);
        window.localStorage.session_key = this.globalProvider.userData.session_key;
        this.utilitiesProvider.presentToast("User Authenticated", "success-toast");
        this.globalProvider.isUserAuthenticated();
        this.dismiss();
      }
      else {
        this.utilitiesProvider.presentToast("Invalid User", "fail-toast");
      }

    }).catch(err => {
      console.log(err);
    });
    this.loginForm.reset();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
