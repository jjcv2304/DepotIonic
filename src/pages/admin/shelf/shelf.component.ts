import {Component} from '@angular/core';
import {DepotDb} from "../../../shared/shared";
import {IShelf} from '../../../models/index';
import {IShelfType} from "../../../models/shelf-type.model";

@Component({
  selector: 'page-shelf',
  templateUrl: 'shelf.html'
})
export class ShelfPage {
  shelves: IShelf[];
  shelfTypes: IShelfType[];

  constructor(private db: DepotDb) {
    this.loadShelves();
    this.loadShelfTypes();
  };

  loadShelves() {
    this.db.getShelves().subscribe(s => this.shelves = s);
  }

  loadShelfTypes() {
    this.db.getShelfTypes().subscribe(st => this.shelfTypes = st);
  }

  deleteShelf(shelf: IShelf) {
    this.db.deleteShelf(shelf.id);
    this.loadShelves();
  };

  addShelf() {
    let shelfType = this.shelfTypes[0];
    let shelf: IShelf = {
      id: this.getRandomInt(2, 1000),
      name: 'tres',
      description: 'tres  desc',
      width: 10,
      height: 10,
      depth: 10,
      location: "room",
      shelfParent: null,
      type: shelfType
    };
    this.db.addShelf(shelf);
    this.loadShelves();

  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
