import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { ChatWindowPage } from '../chat-window/chat-window';


@Component({
  selector: 'page-chat-subjects',
  templateUrl: 'chat-subjects.html',
})
export class ChatSubjectsPage {


  items = [
    {
      img: '../../assets/imgs/user1.png', id: "user@test.com",
      messages: "Welcome to Virtual University Learning Management System!", time: "12:30 am"
    },
    {
      img: '../../assets/imgs/user2.png', id: "user2@test.com",
      messages: "University Learning Management System!", time: "1:30 pm"
    },
    {
      img: '../../assets/imgs/user3.jpg', id: "user3@test.com",
      messages: [
        "Learning Management System!",
        "Virtual University",
        "Learning Management System!"], time: "5:45 am"
    },
    {
      img: '../../assets/imgs/user4.jpg', id: "user4@test.com",
      messages: " Virtual University Learning Management System!", time: "10:50 pm"
    }
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
  }


  gotoMessage2Page(it) {
    this.navCtrl.push(ChatWindowPage, { userinfo: it });
  }

  goback() {
    this.navCtrl.pop();
  }

}
