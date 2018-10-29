import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChatSubjectsPage } from '../chat-subjects/chat-subjects';


@Component({
  selector: 'page-chat-window',
  templateUrl: 'chat-window.html',
})
export class ChatWindowPage {
  viewController
  user2: any = [];

  user: {};

  otherUser;
  othermessage;

  currentTime;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.user = this.navParams.get('userinfo');

    this.otherUser = this.othermessage + " " + this.currentTime;

    var currentseconds = new Date().getSeconds();
    var currenthours = new Date().getHours();
    var currentminutes = new Date().getMinutes();
    this.currentTime = currenthours + ":" + currentminutes;
  }


  ionViewDidLoad() {
  }

  done() {
    let done = this.viewCtrl.dismiss(ChatSubjectsPage);

  }

  goBack() {
    this.navCtrl.pop();
  }

  sendMessage(mess) {
    this.user2.push({ messag: mess, timee: this.currentTime });
    this.othermessage = "";
  }


}
