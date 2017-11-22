import { Injectable } from '@angular/core';
import { SqlStorage } from './sql-storage.service';
import { IItem, IShelf, IItemType, IShelfType } from '../models/index';
import {Observable} from "rxjs/Observable";

@Injectable()
export class DepotDb {

  constructor(private sql: SqlStorage) {
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

  getShelves(): Observable<IShelf[]> {
    return this.sql.getShelves();
  }
  addShelf(shelf: IShelf): void {
    this.sql.addShelf(shelf);
  }
  deleteShelf(id: number): void {
    this.sql.deleteShelf(id);
  }

  getItems(): Observable<IItem[]> {
    return this.sql.getItems();
  }
  addItem(item: IItem): void {
    this.sql.addItem(item);
  }
  deleteItem(id: number): void {
    this.sql.deleteItem(id);
  }



}
