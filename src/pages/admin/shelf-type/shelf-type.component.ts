import { Component } from '@angular/core';
import { DepotDb } from "../../../shared/shared";
import {  IShelfType } from '../../../models/index';

@Component({
  selector: 'page-shelf-type',
  templateUrl: 'shelf-type.html',
})

export class ShelfTypePage {
  shelfTypes: IShelfType[];

    constructor(private db: DepotDb) {
      this.getShelfTypes();
    };

  getShelfTypes(){
    this.  db.getShelfTypes().subscribe(st => this.shelfTypes = st);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfTypePage');
  }

  deleteShelfType(shelfType) {
    console.log("deleteShelfType: " + shelfType.id);
  };

  addShelfType() {
    let st: IShelfType = {id:this.getRandomInt(2,1000), name: 'tres', description: 'tres  desc'};
    this.db.addShelfType(st);
    this.getShelfTypes();

  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
