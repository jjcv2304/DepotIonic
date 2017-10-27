import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-shelf',
  templateUrl: 'shelf.html'
})
export class ShelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfPage');
   
    // // set a key/value
    // this.storage.set('name', 'Max');

    //   // Or to get a key/value pair
    // this.storage.get('age').then((val) => {
    //     console.log('Your age is', val);
    // });
  }

}
