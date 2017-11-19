import { Component } from '@angular/core';
import { DepotDb } from "../../../shared/shared";
import { IItemType } from '../../../models/index';

@Component({
  selector: 'page-item-type',
  templateUrl: 'item-type.html',
  styles: [`
  .row{
    border: thin solid lightgrey;
    flex-wrap: wrap;
    height: 50px;
    overflow: hidden;
    }

    .col{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  `]
})
export class ItemTypePage {
  itemTypes: IItemType[];

  constructor(private db: DepotDb) {
    this.itemTypes = db.getItemTypes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShelfPage');
  }

  deleteItemType(itemType) {
    console.log("deleteItemType: " + itemType.id);
  }

  addItemType() {
    console.log("addItemType");
  }

}
