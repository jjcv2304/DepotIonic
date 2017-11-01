import { Component } from '@angular/core';
import { DepotDbMock } from "../../../shared/shared";
import {  IShelfType } from '../../../models/index';

@Component({
  selector: 'page-shelf-type',
  templateUrl: 'shelf-type.html',
})

export class ShelfTypePage {
  shelfTypes: IShelfType[];
  
    constructor(private db: DepotDbMock) {
      this.shelfTypes = db.getShelfTypes();
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfTypePage');
  }

  deleteShelfType(shelfType) {
    console.log("deleteShelfType: " + shelfType.id);
  };
  
  addShelfType() {
    console.log("addShelfType");
  };
}
