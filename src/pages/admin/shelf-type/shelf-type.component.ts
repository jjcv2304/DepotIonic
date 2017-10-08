import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IShelfType } from "../../../models/models";
/*
export class IShelfType {
    id: number;
    name: string;
    description: string;
}

*/

@Component({
  selector: 'page-shelf-type',
  templateUrl: 'shelf-type.html',
})
export class ShelfTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfTypePage');
  }

}
