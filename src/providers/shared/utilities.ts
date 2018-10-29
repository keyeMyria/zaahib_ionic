import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class UtilitiesProvider {
  loader:any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {
    console.log('Hello UtilitiesProvider Provider');
  }


  presentToast(message: string, className:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: className,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  showLoader(){
    this.loader= this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loader.present();
  }


  hideLoader(){
    this.loader.dismiss();
  }

}
