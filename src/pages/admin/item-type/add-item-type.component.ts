/**
 * Created by jjcv2 on 17/02/2018.
 */
import { Component } from '@angular/core';
import { DepotDb } from "../../../shared/shared";
import { IItemType } from '../../../models/index';

@Component({
  selector: 'page-add-item-type',
  templateUrl: 'item-type.html'
})
export class AddItemTypePage {
  itemTypes: IItemType[];

  constructor(private db: DepotDb) {
    // this.loadItemTypes();
  }

  // loadItemTypes(){
  //   this.db.getItemTypes().subscribe(it => this.itemTypes = it);
  // }

  // deleteItemType(itemType: IItemType) {
  //   this.db.deleteItemType(itemType.id);
  //   this.loadItemTypes();
  // }

  // addItemType() {
  //   let st: IItemType = {id:this.getRandomInt(2,1000), name: 'it 1', description: 'it 1  desc'};
  //   this.db.addItemType(st);
  //   this.loadItemTypes();
  // }
  //
  // getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }


}
