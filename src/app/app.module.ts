import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPageModule } from '../pages/list/list.module';
import { DirectoryPage } from '../pages/directory/directory';
import { DirectoryPageModule } from '../pages/directory/directory.module';
import { TabMapPage } from '../pages/tab-map/tab-map';
import { TabMapPageModule } from '../pages/tab-map/tab-map.module';
import { DetailPage } from '../pages/detail/detail';
import { DetailPageModule } from '../pages/detail/detail.module';
import { FeaturesPageModule } from '../pages/features/features.module';
import { ContactsDetailPageModule } from '../pages/contacts-detail/contacts-detail.module';
import { MapDetailPageModule } from '../pages/map-detail/map-detail.module';
import { NumericSelectorModalPage } from '../pages/numeric-selector-modal/numeric-selector-modal';
import { ChatSubjectsPage } from '../pages/chat-subjects/chat-subjects';
import { ChatWindowPage } from '../pages/chat-window/chat-window';
import { SearchAgentsPage } from '../pages/search-agents/search-agents';
import { AddListingSimpleModePage } from '../pages/add-listing-simple-mode/add-listing-simple-mode';
import { AddListingAdvancedModePage } from '../pages/add-listing-advanced-mode/add-listing-advanced-mode';


//Modals
import { LocationModalPage } from '../pages/modal/location-modal/location-modal';
import { FeaturesPage } from '../pages/features/features';
import { ContactsDetailPage } from '../pages/contacts-detail/contacts-detail';
import { MapDetailPage } from '../pages/map-detail/map-detail';
import { FilterLocationModalPage } from '../pages/modal/filter-location-modal/filter-location-modal';
import { FilterLocationModalPageModule } from '../pages/modal/filter-location-modal/filter-location-modal.module';
import { CountryModalPage } from '../pages/modal/country-modal/country-modal';
import { CountryModalPageModule } from '../pages/modal/country-modal/country-modal.module';
import { DateSelectorModalPage } from '../pages/date-selector-modal/date-selector-modal';
//Map
import { MapPage } from '../pages/map/map';
import { MapPageModule } from '../pages/map/map.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/shared/global';
import { SearchProvider } from '../providers/shared/search';
import { ServerProvider } from '../providers/shared/server';
import { TermsOfUseProvider } from '../providers/menu/termsofuse';



import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginModalPage } from '../pages/modal/login-modal/login-modal';
import { RegisterModalPage } from '../pages/modal/register-modal/register-modal';
import { LoginProvider } from '../providers/login/login';
import { TermsOfUsePageModule } from '../pages/terms-of-use/terms-of-use.module';
import { TermsOfUsePage } from '../pages/terms-of-use/terms-of-use';
import { PrivacyPolicyPageModule } from '../pages/privacy-policy/privacy-policy.module';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { PrivacypolicyProvider } from '../providers/menu/privacypolicy';
import { RegisterEmailModalPage } from '../pages/modal/register-modal/register-email/register-email';
import { RegisterMobileModalPage } from '../pages/modal/register-modal/register-mobile/register-mobile';
import { HelpCenterPageModule } from '../pages/help-center/help-center.module';
import { HelpcenterProvider } from '../providers/menu/helpcenter';
import { AdvertisingProvider } from '../providers/menu/advertising';
import { ContactusProvider } from '../providers/menu/contactus';
import { AdvertisingPageModule } from '../pages/advertising/advertising.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { CaptchaProvider } from '../providers/captcha/captcha';
import { UtilitiesProvider } from '../providers/shared/utilities';
import { VerifyMobilePage } from '../pages/modal/register-modal/verify-mobile/verify-mobile';
import { RegisterMobileUsernamePage } from '../pages/modal/register-modal/register-mobile-username/register-mobile-username';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { PropertyDetailProvider } from '../providers/property/property-detail';
import { PropertyListProvider } from '../providers/property/property-list';
import { ListModalPageModule } from '../pages/list-modal/list-modal.module';
import { FilterModalPageModule } from '../pages/modal/filter-modal/filter-modal.module';
import { SortingModalPageModule } from '../pages/sorting-modal/sorting-modal.module';
import { RangeSelectorModalPageModule } from '../pages/range-selector-modal/range-selector-modal-module';
// import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
//import { LocationSelectorComponent } from '../components/location-selector/location-selector';
import { HeaderComponent } from '../components/header/header';
import { ComponentsModule } from '../components/components.module';
import { AgentFilterModalPageModule } from '../pages/agent-filter-modal/agent-filter-modal.module';
import { AddListingAdvancedModePageModule } from '../pages/add-listing-advanced-mode/add-listing-advanced-mode.module';
import { LocationModalPageModule } from '../pages/modal/location-modal/location-modal.module';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AddPropertyProvider } from '../providers/property/add-property';
import { LocationAddressSectionPage } from '../pages/modal/add-property/location-address-section/location-address-section'; 
import { ListingDetailSectionPage } from '../pages/modal/add-property/listing-detail-section/listing-detail-section';
import { ContactDetailSectionPage } from '../pages/modal/add-property/contact-detail-section/contact-detail-section';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/Zaahib Global Data/', '.json');
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MyApp,
    HomePage,
    LoginModalPage,
    RegisterModalPage,
    RegisterEmailModalPage,
    RegisterMobileModalPage,
    NumericSelectorModalPage,
    ChatSubjectsPage,
    ChatWindowPage,
    DateSelectorModalPage,
    RegisterMobileModalPage,
    VerifyMobilePage,
    RegisterMobileUsernamePage,
    SearchAgentsPage,
    AddListingSimpleModePage,
    AddListingAdvancedModePage,
    ListingDetailSectionPage,
    LocationAddressSectionPage,
    ContactDetailSectionPage

    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DirectoryPageModule,
    ListPageModule,
    LocationModalPageModule,
    TabMapPageModule,
    FilterLocationModalPageModule,
    MapPageModule,
    FeaturesPageModule,
    DetailPageModule,
    ContactsDetailPageModule,
    TermsOfUsePageModule,
    PrivacyPolicyPageModule,
    MapDetailPageModule,
    CountryModalPageModule,
    HelpCenterPageModule,
    AdvertisingPageModule,
    ContactUsPageModule,
    ListModalPageModule,
    FilterModalPageModule,
    SortingModalPageModule,
    RangeSelectorModalPageModule,
    AddListingAdvancedModePageModule,
    CommonModule,
    // ComponentsModule,
    IonicModule.forRoot(MyApp, { menuType: 'overlay' }, {
      links: [
        { component: HomePage, segment: 'home' },
        { component: ListPage, segment: 'list', defaultHistory: [ListPage] },
        { component: DirectoryPage, segment: 'directory', defaultHistory: [DirectoryPage] },
        { component: TabMapPage, segment: 'map-location', defaultHistory: [TabMapPage] },
        { component: DetailPage, segment: 'detail', defaultHistory: [DetailPage] },
        { component: FeaturesPage, segment: 'features', defaultHistory: [FeaturesPage] },
        { component: ContactsDetailPage, segment: 'contacts-detail', defaultHistory: [ContactsDetailPage] },
        { component: MapDetailPage, segment: 'map-detail', defaultHistory: [MapDetailPage] }
      ]
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    PipesModule,
    ComponentsModule,
    AgentFilterModalPageModule



  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LocationModalPage,
    MapPage,
    FilterLocationModalPage,
    TabMapPage,
    DetailPage,
    FeaturesPage,
    ContactsDetailPage,
    MapDetailPage,
    CountryModalPage,
    LoginModalPage,
    RegisterModalPage,
    TermsOfUsePage,
    PrivacyPolicyPage,
    RegisterEmailModalPage,
    RegisterMobileModalPage,
    NumericSelectorModalPage,
    ChatSubjectsPage,
    ChatWindowPage,
    DateSelectorModalPage,
    RegisterMobileModalPage,
    VerifyMobilePage,
    RegisterMobileUsernamePage,
    //LocationSelectorComponent,
    SearchAgentsPage,
    AddListingSimpleModePage,
    AddListingAdvancedModePage,
    ListingDetailSectionPage,
    LocationAddressSectionPage,
    ContactDetailSectionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider,
    SearchProvider,
    ServerProvider,
    LoginProvider,
    TermsOfUseProvider,
    PrivacypolicyProvider,
    HelpcenterProvider,
    AdvertisingProvider,
    ContactusProvider,
    CaptchaProvider,
    UtilitiesProvider,
    PropertyDetailProvider,
    PropertyListProvider,
    Geolocation,
    InAppBrowser,
    AddPropertyProvider,
    ImagePicker,
    Camera,
    Base64ToGallery
  ]
})
export class AppModule { }
