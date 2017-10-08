import { Component } from '@angular/core';
import { DepotDbMock } from "../../../shared/shared";
import { IItemType } from '../../../models/item-type.model';

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

  `]
})
export class ItemTypePage {
  itemTypes: IItemType[];

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  constructor(private db: DepotDbMock) {
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
