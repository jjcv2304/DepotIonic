import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShelfPage, ShelfTypePage, ItemTypePage } from "../pages";

@Component({
  templateUrl: 'admin.html'
})
export class AdminPage {

  constructor(public navCtrl: NavController) { };

  goToShelves(){
    this.navCtrl.push(ShelfPage);
  }
  goToShelvesTypes(){
    this.navCtrl.push(ShelfTypePage);
  }
  goToItemTypes(){
    this.navCtrl.push(ItemTypePage);
  }

}
