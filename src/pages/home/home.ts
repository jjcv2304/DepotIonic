import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShelfPage } from "../pages";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { };

  goToShelf(){
    
    this.navCtrl.push(ShelfPage);
  }

}
