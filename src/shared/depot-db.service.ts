import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { SqlStorage } from './sql-storage.service';
import { IItem, IShelf, IItemType, IShelfType } from '../models/index';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DepotDb {

  constructor(public events: Events, private sql: SqlStorage) {
  }

  initStorage(): Promise<any> {
      return this.sql.initializeDatabase();
  }


  getItems(): IItem[] {
    //return ITEMS;
    return null;
  }

  getItem(id: number): IItem {
    return null;//return ITEMS.find(i => i.id === id);
  }

  getItemTypes(): IItemType[] {
  //  return ITEMTYPES;
    return null;
  }

  getItemType(id: number): IItemType {
    //return ITEMTYPES.find(it => it.id === id);
    return null;
  }

  getShelves(): IShelf[] {
    //return SHELVES;
    return null;
  }

  getShelf(id: number): IShelf {
    //return SHELVES.find(i => i.id === id);
    return null;
  }

  getShelfTypes(): Observable<IShelfType[]> {
    return this.sql.getShelfTypes();
  }
  addShelfType(shelfType: IShelfType): void {
    this.sql.addShelfType(shelfType);
  }

  getShelfType(id: number): IShelfType {
    //return SHELVESTYPES.find(i => i.id === id);
    return null;
  }

  /*

  ionViewDidEnter(){
    console.log('view did enter');
    this.sqlite.create({name: "data.db", location: "default"}).then((db : SQLiteObject) => {
      this.database = db;
      this.createTable();
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  public createTable(){
    this.database.executeSql('create table if not exists invoices(name VARCHAR(32))', {})
      .then(() => {
        console.log('Table Invoice created !');

      })
      .catch(e => console.log(e));
  }

  public insertInvoice(){
    var c = 'INV' + this.counter;
    this.database.executeSql("INSERT INTO invoices (name) VALUES (?)", [c]).then((data) => {
      console.log("INSERTED: ");
      this.counter++;
      this.showInvoices();
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  public showInvoices(){
    this.database.executeSql("SELECT * FROM invoices", []).then((data) => {
      this.invoices = [];
      if(data.rows.length > 0) {
        for(var i = 0 ; i < data.rows.length ; i++) {
          this.invoices.push({ name: data.rows.item(i).name });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

*/

}
