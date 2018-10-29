import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sorting-modal',
  templateUrl: 'sorting-modal.html',
})

export class SortingModalPage {

  btnText;
  Relevance:boolean;
  Thenewest:boolean;
  LowPrice:boolean;
  HighestPrice:boolean;
  Views:boolean;
  filterValue: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewController: ViewController) {
  }

  ionViewDidLoad() {
    this.filterValue = this.navParams.get('filterValue');
    this.Relevance = this.filterValue == "Relevance"; 
    this.Thenewest = this.filterValue == "The newest"; 
    this.LowPrice = this.filterValue == "Low Price"; 
    this.HighestPrice = this.filterValue == "Highest Price"; 
    this.Views = this.filterValue == "Views"; 
  }

  done(){
    let done = this.viewController.dismiss({buttonTxt:this.btnText});
  }

  relevance(){
    this.btnText="Relevance";
    this.Relevance=true;
    this.Thenewest=false;
    this.LowPrice=false;
    this.HighestPrice=false;
    this.Views=false;
  }

  thenewest(){
    this.btnText="The newest";
    this.Relevance=false;
    this.Thenewest=true;
    this.LowPrice=false;
    this.HighestPrice=false;
    this.Views=false;
  }

  lowPrice(){
    this.btnText="Low Price";
    this.Relevance=false;
    this.Thenewest=false;
    this.LowPrice=true;
    this.HighestPrice=false;
    this.Views=false;
  }

  highestPrice(){
    this.btnText="Highest Price";
    this.Relevance=false;
    this.Thenewest=false;
    this.LowPrice=false;
    this.HighestPrice=true;
    this.Views=false;
  }

  views(){
    this.btnText="Views";
    this.Relevance=false;
    this.Thenewest=false;
    this.LowPrice=false;
    this.HighestPrice=false;
    this.Views=true;
  }

}
