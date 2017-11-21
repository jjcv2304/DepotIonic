import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';


import {IShelfType} from "../models/shelf-type.model";
import {IItemType} from "../models/item-type.model";
import {IShelf} from "../models/shelf.model";

@Injectable()
export class SqlStorage {
  public db: SQLiteObject;

  constructor(private sqlite: SQLite) {
  }

  initializeDatabase() {
    return this.sqlite.create({name: 'depot.db', location: 'default'}).then(db => {
      this.db = db;

      this.createTableShelfTypeIfNotExists();
      this.createTableShelfIfNotExists();
      this.createTableItemTypeIfNotExists();
      this.createTableItemIfNotExists();
      //this.seedDatabaseIfEmpty.call(this);
      this.seedDatabaseIfEmpty();

    }, (error) => {
      console.log("ERROR: ", error);
    });

  };

  private createTableItemIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS item (id integer primary key, name text, description text, expirationDate integer, width integer, height integer, typeId integer, shelfId integer)', [])
      .then().catch(e => console.error(e));
  };

  private createTableItemTypeIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS itemType (id integer primary key, name text, description text)', [])
      .then().catch(e => console.error(e));
  };

  private createTableShelfIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS shelf (id integer primary key, name text, description text, width integer, height integer, depth integer, location text, shelfParent integer, typeId integer)', [])
      .then().catch(e => console.error(e));
  };

  private createTableShelfTypeIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS shelfType (id integer primary key, name text, description text)', [])
      .then().catch(e => console.error(e));
  };

  private seedDatabaseIfEmpty() {

    Observable.forkJoin(
      this.getShelfTypes(),
      this.getItemTypes(),
      function (shelfTypes, itemTypes) { return shelfTypes.length + itemTypes.length; }
    ).subscribe( (totalRecordsFound) => {
        if (totalRecordsFound == 0) {
          const SHELVESTYPES: IShelfType[] = [
            {
              id: 1,
              name: "Fridge",
              description: "Cool shelf"
            },
            {
              id: 2,
              name: "Freezer",
              description: "Very Cool shelf"
            },
            {
              id: 3,
              name: "Shelf",
              description: "Shelf, 25C"
            }
          ];
          for (let i = 0; i < SHELVESTYPES.length; i++) {
            this.addShelfType(SHELVESTYPES[i]);
          }
          const ITEMTYPES: IItemType[] = [
            {
              id: 1,
              name: 'Alimento',
              description: 'Se puede comer'
            },
            {
              id: 2,
              name: 'Ropa',
              description: 'Ropa en general'
            },
            {
              id: 11,
              name: 'Verdura',
              description: 'Es una verdura o vegetal'
            },
            {
              id: 12,
              name: 'Legumbre',
              description: 'Es legumbre'
            },
            {
              id: 13,
              name: 'Listo para comer',
              description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
            },
            {
              id: 21,
              name: 'Ropa vestir',
              description: 'Ropa para trabajar o salir con los amigos'
            },
            {
              id: 22,
              name: 'Ropa deporte',
              description: 'Ropa para practicar deporte'
            },
          ];
          for (let i = 0; i < ITEMTYPES.length; i++) {
            this.addItemType(ITEMTYPES[i]);
          }
        }
    });
  };

  getShelfTypes(): Observable<IShelfType[]> {
    return Observable.fromPromise(
      this.db.executeSql('SELECT id, name, description FROM shelfType', [])
        .then(data => {
          let results: IShelfType[] = [];
          for (let i = 0; i < data.rows.length; i++) {
            results.push(data.rows.item(i));
          }
          return results;
        }).catch(function () {
        return null;
      })
    );
  };
  addShelfType(shelfType: IShelfType): Promise<any> {
    return this.db.executeSql('insert into shelfType(id, name, description) values (?, ?, ? )', [shelfType.id, shelfType.name, shelfType.description]);
  };
  deleteShelfType(id: number) {
    return this.db.executeSql('delete from shelfType where id = ? ', [id]);
  }

  getItemTypes(): Observable<IItemType[]> {
    return Observable.fromPromise(
      this.db.executeSql('SELECT id, name, description FROM itemType', [])
        .then(data => {
          let results: IItemType[] = [];
          for (let i = 0; i < data.rows.length; i++) {
            results.push(data.rows.item(i));
          }
          return results;
        }).catch(function () {
        return null;
      })
    );
  };
  addItemType(iItemType: IItemType): Promise<any> {
    return this.db.executeSql('insert into itemType(id, name, description) values (?, ?, ? )', [iItemType.id, iItemType.name, iItemType.description]);
  };
  deleteItemType(id: number) {
    return this.db.executeSql('delete from itemType where id = ? ', [id]);
  }

  getShelves(): Observable<IShelf[]> {
    return Observable.fromPromise(
      this.db.executeSql('SELECT id, name, description, width, height, depth, location, shelfParent, typeId FROM shelf', [])
        .then(data => {
          let results: IShelf[] = [];
          for (let i = 0; i < data.rows.length; i++) {
            results.push(data.rows.item(i));
          }
          return results;
        }).catch(function () {
        return null;
      })
    );
  };
  addShelf(shelf: IShelf): Promise<any> {
    return this.db.executeSql('insert into shelfType(id, name, description, width, height, depth, location, shelfParent, typeId) values (?, ?, ?, ?, ?, ?, ?, ?, ? )', [shelf.id, shelf.name, shelf.description, shelf.width, shelf.height, shelf.depth, shelf.location, shelf.shelfParent, shelf.type.id]);
  };
  deleteShelf(id: number) {
    return this.db.executeSql('delete from shelf where id = ? ', [id]);
  }

}
