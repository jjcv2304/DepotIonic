import { Component } from '@angular/core';
import { DepotDb } from "../../../shared/shared";
import { IShelf } from '../../../models/index';

@Component({
  selector: 'page-shelf',
  templateUrl: 'shelf.html'
})
export class ShelfPage {
  shelves: IShelf[];

  constructor(private db: DepotDb) {
    this.shelves = db.getShelves();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfPage');
  }

  deleteShelf(shelf) {
    console.log("deleteShelf: " + shelf.id);
  }

  addShelf() {
    console.log("addShelf");
  }

}
