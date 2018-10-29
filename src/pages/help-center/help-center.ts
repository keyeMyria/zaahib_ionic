import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpcenterProvider } from '../../providers/menu/helpcenter';
import { HelpData, category } from '../../app/models/help';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-help-center',
  templateUrl: 'help-center.html',
})
export class HelpCenterPage {
  helpData: Array<category>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public helpcenterProvider: HelpcenterProvider) {
  }

  ionViewDidLoad() {
    this.getHelp();
  }

  toggleAnswer(question) {
    question.show = !question.show
  }

  isAnswerShown(question) {
    return question.show;
  }

  async getHelp() {
    this.helpcenterProvider.getHelp<any>().then(res => {
      this.helpData = res.categories as Array<category>;

    }).catch(err => {
      console.log(err);
    });
  }

  goback() {
    this.navCtrl.push(HomePage);
  }

}
