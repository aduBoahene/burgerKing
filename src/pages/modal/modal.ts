import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
catMenus:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');

    this.catMenus=[
      
    ]
  }

  goToAbout(){
    this.navCtrl.push(AboutPage)
  }

  goback() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }


}
