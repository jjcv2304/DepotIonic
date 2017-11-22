import {Component} from '@angular/core';
import {DepotDb} from "../../shared/shared";

import {IItem, IShelf} from "../../models/index";


@Component({
  selector: 'page-what-i-have',
  templateUrl: 'what-i-have.html'
})
export class WhatIHavePage {
  items: IItem[];
  shelves: IShelf[];

  constructor(private db: DepotDb) {
    this.loadItems();
    this.loadShelves();
  }

  loadItems() {
    this.db.getItems().subscribe(i => this.items = i);
  }

  loadShelves() {
    this.db.getShelves().subscribe(s => this.shelves = s);
  }

  deleteItem(item: IItem) {
    this.db.deleteItem(item.id);
    this.loadItems();
  }

  addItem() {
    let shelf = this.shelves[0];
    let item: IItem = {
      id: this.getRandomInt(2, 1000),
      name: 'it 1',
      description: 'it 1  desc',
      expirationDate: new Date(),
      height: 10,
      width: 10,
      shelf: shelf,
      type: null
    };
    this.db.addItem(item);
    this.loadItems();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
