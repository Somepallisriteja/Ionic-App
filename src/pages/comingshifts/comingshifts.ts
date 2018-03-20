import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';


@IonicPage()
@Component({
  selector: 'page-comingshifts',
  templateUrl: 'comingshifts.html',
})
export class ComingshiftsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComingshiftsPage');
  }
  onload(){
    this.navCtrl.push(DetailsPage)
  }

}
