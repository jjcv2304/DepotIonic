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

  getItemTypes(): Observable<IItemType[]> {
    return this.sql.getItemTypes();
  }
  addItemType(itemType: IItemType): void {
    this.sql.addItemType(itemType);
  }
  deleteItemType(id: number): void {
    this.sql.deleteItemType(id);
  }

  getShelfTypes(): Observable<IShelfType[]> {
    return this.sql.getShelfTypes();
  }
  addShelfType(shelfType: IShelfType): void {
    this.sql.addShelfType(shelfType);
  }
  deleteShelfType(id: number): void {
    this.sql.deleteShelfType(id);
  }



}
