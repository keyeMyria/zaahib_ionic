import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactusProvider } from '../../providers/menu/contactus';
import { Contact, ContactUs } from '../../app/models/contact';
import { GlobalProvider} from '../../providers/shared/global';
import { HomePage } from '../home/home';
import { CaptchaProvider } from '../../providers/captcha/captcha';
import { Captcha } from '../../app/models/shared/general';
import { UtilitiesProvider } from '../../providers/shared/utilities';
import { Md5 } from 'ts-md5';

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  captchaData: Captcha = {
    registrationCaptcha: "",
    registrationSecurityCode: "",
    registrationSecurityHash: ""
  };

  contactData:ContactUs ={
    name:"",
    email:"",
    category:"",
    comments:"",
    security_code:"",
    security_hash:""
  };

  contactText : string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public contactusProvider: ContactusProvider,
     public globalProvider: GlobalProvider,
     public captchaProvider:CaptchaProvider,
     public utilitiesProvider:UtilitiesProvider
     
) { }

  ionViewDidLoad() {
    this.getContactUs();
    this.generateCaptcha();
  }

  async getContactUs() {

    this.utilitiesProvider.showLoader();
    this.contactusProvider.getContactUs<any>().then(res => {

    console.log(res);

      let contactData = res as Contact;
      if (this.globalProvider.selectedLanguage == "en") {
        this.contactText = contactData.ContactTextEn;
      }
      else {
        this.contactText = contactData.ContactTextAr;
      }
      console.log(this.contactText);

      // this.CountryName=res.Country;
      // this.ContactTextEn=res.ContactTextEn;
      this.utilitiesProvider.hideLoader();

    }).catch(err => {

      console.log(err);
    });
  }

  async sendEmail(){
    if(this.validateCaptcha()){
   this.contactusProvider.sendEmail(this.contactData).then(res =>{
      console.log(res);
      this.reset();
    });
  }
  }


  goback(){
    this.navCtrl.push(HomePage);
  }

  refreshCaptcha() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    this.captchaProvider.getCaptcha().then(res => {
      this.captchaData = res;
      this.contactData.security_hash=this.captchaData.registrationSecurityHash;
      console.log(res);

    }).catch(err => {
      console.log(err);
    });
  }


  validateCaptcha() {
    var md5 = new Md5();
    md5.appendStr(this.contactData.security_code)
    let newHash = md5.end();
    if (newHash === this.captchaData.registrationSecurityHash) {
      return true;
    }
    else {
      this.utilitiesProvider.presentToast("invalid captcha", "fail-toast");
    }
  }



  reset(){
    this.contactData.name="";
    this.contactData.email="";
    this.contactData.category="";
    this.contactData.comments="";
    this.contactData.security_code="";
    this.generateCaptcha();


  }
}
