import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the CatListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat-list',
  templateUrl: 'cat-list.html',
})
export class CatListPage {
cat:any
catList:any
  constructor(public navCtrl: NavController,private modal:ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatListPage');

    this.cat=this.navParams.get("cat")
    console.log("cat",this.cat)

    console.log("cat",this.cat.name)

    this.catList=[
      {
        parentId:0,
        name:"Angry WHOPPER®",
        url:"../../assets/catList/b1.png",
        description:"Our Angry WHOPPER® features ¼ lb* of flame-grilled beef, piled high with thick-cut bacon, American cheese, iceberg lettuce, tomatoes, crispy onion petals, jalapeños, creamy mayonnaise and angry sauce all layered between a toasted sesame seed bun.",
        nutritionInfo:{
          calories:850,
          fat:53,
          saturatedFat:18,
          transFat:2,
          cholestrol:125,
          sodium:1710,
          carbohydrates:59,
          fiber:2,
          sugar:15,
          protein:35
        }
      },
      {
        parentId:0,
        name:"Triple STACKER KING™",
        url:"../../assets/catList/b2.png",
        description:"Our Angry WHOPPER® features ¼ lb* of flame-grilled beef, piled high with thick-cut bacon, American cheese, iceberg lettuce, tomatoes, crispy onion petals, jalapeños, creamy mayonnaise and angry sauce all layered between a toasted sesame seed bun.",
        nutritionInfo:{
          calories:850,
          fat:53,
          saturatedFat:18,
          transFat:2,
          cholestrol:125,
          sodium:1710,
          Carbohydrates:59,
          fiber:2,
          sugar:15,
          protein:35
        }
      },
      {
        parentId:0,
        name:"Double STACKER KING™",
        url:"../../assets/catList/b3.png",
        description:"Our Angry WHOPPER® features ¼ lb* of flame-grilled beef, piled high with thick-cut bacon, American cheese, iceberg lettuce, tomatoes, crispy onion petals, jalapeños, creamy mayonnaise and angry sauce all layered between a toasted sesame seed bun.",
        nutritionInfo:{
          calories:850,
          fat:53,
          saturatedFat:18,
          transFat:2,
          cholestrol:125,
          sodium:1710,
          Carbohydrates:59,
          fiber:2,
          sugar:15,
          protein:35
        }
      },

    ]

  }

  openModal(){
   
    const myModal = this.modal.create('ModalPage')
    myModal.present()
  }

}
