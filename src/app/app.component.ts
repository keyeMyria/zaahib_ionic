import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, PopoverController, ModalController, ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CountryModalPage } from '../pages/modal/country-modal/country-modal';
import { GlobalProvider } from '../providers/shared/global';
import { TranslateService } from '@ngx-translate/core';
import { getCountryLocaliztionData } from '../assets/Zaahib Global Data/CountryLocalizationData';
import { LoginModalPage } from '../pages/modal/login-modal/login-modal';
import { RegisterModalPage } from '../pages/modal/register-modal/register-modal';
import { TermsOfUsePage } from '../pages/terms-of-use/terms-of-use';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { User } from './models/shared/user';
import { HelpCenterPage } from '../pages/help-center/help-center';
import { AdvertisingPage } from '../pages/advertising/advertising';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ChatSubjectsPage } from '../pages/chat-subjects/chat-subjects';
import { SearchAgentsPage } from '../pages/search-agents/search-agents';
import { AddListingSimpleModePage } from '../pages/add-listing-simple-mode/add-listing-simple-mode';
import { AddListingAdvancedModePage } from '../pages/add-listing-advanced-mode/add-listing-advanced-mode';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  loginTitle: string;
  registerTitle: string;
  savedListingTitle: string;
  helpTitle: string;
  signOutTitle: string;
  myListingsTitle: string;
  myProfileTitle: string;
  // searchAgent: any = SearchAgentsPage;
  //user:any;
  pushPage=SearchAgentsPage;

  countryBoolVal: boolean = false;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public popoverController: PopoverController,
    public modalCtrl: ModalController,
    public actionsheetController: ActionSheetController,
    public globalProvider: GlobalProvider,
    public translate: TranslateService ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'TermsofUse', component: TermsOfUsePage },
      { title: 'PrivacyPolicy', component: PrivacyPolicyPage },
      { title: 'HelpCenter', component: HelpCenterPage },
      // { title: 'MobileApp', component: ListPage },
      { title: 'advertising', component: AdvertisingPage },
      { title: 'ContactUs', component: ContactUsPage },
      
      
    ];
    this.translate.setDefaultLang(this.globalProvider.selectedLanguage);
    this.translate.use(this.globalProvider.selectedLanguage);

    this.translateLoginActionSheet();
    this.globalProvider.isUserAuthenticated();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {}, { animate: true });
  }

  isEmpty(obj) {
    for (var id in obj) {
      if (obj.hasOwnProperty(id))
        return false;
    }
    return true;
  }

  showCountryModal() {
    let countryModal = this.modalCtrl.create(CountryModalPage, {}, {
      showBackdrop: false
    });
    countryModal.onDidDismiss(data => {
      if ((!this.isEmpty(data) && this.countryBoolVal) || (!this.isEmpty(data) && !this.countryBoolVal)) {
        this.globalProvider.selectedCountry = data;
        this.countryBoolVal = true;
      } else if (this.isEmpty(data) && !this.countryBoolVal) {
        this.countryBoolVal = false;
      }
    });
    countryModal.present();
  }

  btnLoginActionSheet() {
    let action = this.actionsheetController.create({
      //  title: "select an option",
      buttons: [
        {
          text: this.loginTitle,
          icon: "unlock",
          handler: () => {
            this.showLoginModal();
          }
        },
        {
          text: this.registerTitle,
          icon: "person-add",
          handler: () => {
            this.showRegisterModal()
          }
        },
        {
          text: this.savedListingTitle,
          icon: "star",
          handler: () => {
            console.log("saved list");
          }
        },
        {
          text: this.helpTitle,
          icon: "help-circle",
          handler: () => {
            console.log("help");
          }
        },
      ]

    })
    action.present();
  }

  btnUserActionSheet() {
    let action = this.actionsheetController.create({
      //  title: "select an option",
      buttons: [
        {
          text: this.myProfileTitle,
          icon: "list",
          handler: () => {

          }
        },
        {
          text: this.myListingsTitle,
          icon: "list",
          handler: () => {

          }
        },
        {
          text: this.savedListingTitle,
          icon: "star",
          handler: () => {

          }
        },
        {
          text: this.helpTitle,
          icon: "help-circle",
          handler: () => {
            console.log("saved list");
          }
        },
        {
          text: this.signOutTitle,
          icon: "log-out",
          handler: () => {
            localStorage.removeItem("session_key");
            localStorage.removeItem("current_user_json");
            this.globalProvider.isAuthenticated = false;

          }
        },
      ]

    })
    action.present();
  }

  switchLanguage() {
    this.globalProvider.changeDirection();
    if (this.globalProvider.selectedLanguage === "en") {
      this.globalProvider.selectedLanguage = "ar"
      this.translate.use('ar');
      this.translateLoginActionSheet();
    }

    else {
      this.globalProvider.selectedLanguage = "en";
      this.translate.use('en');
      this.translateLoginActionSheet();
    }

    this.globalProvider.countryData = getCountryLocaliztionData(this.globalProvider.selectedLanguage, this.globalProvider.selectedCountry.Country);
    localStorage.setItem('lang', this.globalProvider.selectedLanguage);

    console.log(this.globalProvider.countryData);
  }

  translateLoginActionSheet() {
    this.translate.get("Login").subscribe(value => this.loginTitle = value);
    this.translate.get("Register").subscribe(value => this.registerTitle = value);
    this.translate.get("SavedListings").subscribe(value => this.savedListingTitle = value);
    this.translate.get("Help").subscribe(value => this.helpTitle = value);
    this.translate.get("Signout").subscribe(value => this.signOutTitle = value);
    this.translate.get("My Listings").subscribe(value => this.myListingsTitle = value);
    this.translate.get("MyProfile").subscribe(value => this.myProfileTitle = value);
  }

  showLoginModal() {
    let loginModal = this.modalCtrl.create(LoginModalPage, {}, {
      showBackdrop: false
    });
    loginModal.onDidDismiss(data => {
      console.log("login modal dismissed");
    });
    loginModal.present();
  }

  showRegisterModal() {
    let registerModal = this.modalCtrl.create(RegisterModalPage, {}, {
      showBackdrop: false
    });
    registerModal.onDidDismiss(data => {
      console.log("register modal dismissed");
    });
    registerModal.present();
  }


  idToURLPath(id) {
    
    var strId = id.toString();
    var idURLPath = "";

    for (let i = 0; i < strId.length; i++) {
      idURLPath += strId.charAt(i) + "/";
    }
    return idURLPath;
  }

  ChatSubjectsPage(){
    let modal = this.modalCtrl.create(ChatSubjectsPage);
    modal.present();
  }

  searchAgent(){
    this.nav.push(SearchAgentsPage);
  }

  addListingAdvancedPage(){
    this.nav.push(AddListingAdvancedModePage);
  }

}