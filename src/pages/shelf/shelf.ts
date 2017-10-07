import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ShelfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-shelf',
  templateUrl: 'shelf.html',
})
export class ShelfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
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
