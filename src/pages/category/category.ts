import { CatListPage } from './../cat-list/cat-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  categories:any
  constructor(public navCtrl: NavController,private modal:ModalController) {
  }

  openModal(){
   
    const myModal = this.modal.create('ModalPage')
    myModal.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');

    this.categories=[
      {
        id:1,
        name:"Beverages",
        image:"../../assets/Cat/1.png"
      },
      {
        id:2,
        name:"Coffee",
        image:"../../assets/Cat/2.png"
      },
      {
        id:3,
        name:"Burgers",
        image:"../../assets/Cat/3.png"
      },
      {
        id:4,
        name:"Chicken And More ",
        image:"../../assets/Cat/4.png"
      },
      {
        id:5,
        name:"King Jnr Meals",
        image:"../../assets/Cat/5.png"
      },
      {
        id:6,
        name:"Salads And Veggies",
        image:"../../assets/Cat/6.png"
      },
      {
        id:7,
        name:"Sides",
        image:"../../assets/Cat/7.png"
      },
      {
        id:8,
        name:"Breakfast",
        image:"../../assets/Cat/8.png"
      },
      {
        id:9,
        name:"Sweets",
        image:"../../assets/Cat/9.png"
      },
      {
        id:10,
        name:"Value Menu",
        image:"../../assets/Cat/10.png"
      }
    ]

    console.log("cats",this.categories)

  }

  goToList(cat){
    this.navCtrl.push(CatListPage,{
      "cat":cat
    })
  }

}
