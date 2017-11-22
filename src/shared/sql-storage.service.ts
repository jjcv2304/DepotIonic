import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

import {IShelfType, IItemType, IShelf, IItem} from "../models/index";

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
      this.seedDatabaseIfEmpty();

    }, (error) => {
      console.log("ERROR: ", error);
    });

  };

  private createTableItemIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS item (id integer primary key, name text, description text, expirationDate integer, width integer, height integer, shelfId integer)', [])
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
      this.getShelves(),
      this.getItems(),
      function (shelfTypes, itemTypes, shelves, items) { return shelfTypes.length + itemTypes.length + shelves.length + items.length; }
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
          const SHELVES: IShelf[] = [
            {
              id: 1,
              name: "Despensa habitacion",
              description: "The big shelf in the sleeping room",
              width: 0,
              height: 0,
              depth: 0,
              location: "Sleeping room",
              shelfParent: null,
              type: SHELVESTYPES[2]
            },
            {
              id: 2,
              name: "Dh1",
              description: "Estanteria despensa habitacion",
              width: 60,
              height: 40,
              depth: 30,
              location: "Sleeping room",
              shelfParent: 1,
              type: SHELVESTYPES[2]
            },
            {
              id: 3,
              name: "Dh2",
              description: "Estanteria despensa habitacion",
              width: 25,
              height: 40,
              depth: 30,
              location: "Sleeping room",
              shelfParent: 1,
              type: SHELVESTYPES[2]
            },
            {
              id: 4,
              name: "Dh3",
              description: "Estanteria despensa habitacion",
              width: 60,
              height: 20,
              depth: 30,
              location: "Sleeping room",
              shelfParent: 1,
              type: SHELVESTYPES[2]
            },
            {
              id: 5,
              name: "Dh4",
              description: "Estanteria despensa habitacion",
              width: 60,
              height: 20,
              depth: 30,
              location: "Sleeping room",
              shelfParent: 1,
              type: SHELVESTYPES[2]
            },
            {
              id: 6,
              name: "Nevera",
              description: "Estanteria refrigerada en la cocina",
              width: 0,
              height: 0,
              depth: 0,
              location: "Kitchen",
              shelfParent: null,
              type: SHELVESTYPES[0]
            },
            {
              id: 7,
              name: "Nevera_S1",
              description: "Estanteria refrigerada en la cocina",
              width: 60,
              height: 20,
              depth: 40,
              location: "Kitchen",
              shelfParent: 6,
              type: SHELVESTYPES[0]
            },
            {
              id: 8,
              name: "Nevera_S2",
              description: "Estanteria refrigerada en la cocina",
              width: 20,
              height: 20,
              depth: 40,
              location: "Kitchen",
              shelfParent: 6,
              type: SHELVESTYPES[0]
            },
            {
              id: 9,
              name: "Nevera_S3",
              description: "Estanteria refrigerada en la cocina",
              width: 20,
              height: 20,
              depth: 10,
              location: "Kitchen",
              shelfParent: 6,
              type: SHELVESTYPES[0]
            },
            {
              id: 10,
              name: "Nevera_S4",
              description: "Estanteria refrigerada en la cocina",
              width: 20,
              height: 30,
              depth: 10,
              location: "Kitchen",
              shelfParent: 6,
              type: SHELVESTYPES[0]
            },
            {
              id: 11,
              name: "Congelador",
              description: "Estanteria refrigerada en la cocina",
              width: 50,
              height: 20,
              depth: 40,
              location: "Kitchen",
              shelfParent: null,
              type: SHELVESTYPES[1]
            }
          ];
          for (let i = 0; i < SHELVES.length; i++) {
            this.addShelf(SHELVES[i]);
          }
          const ITEMS: IItem[] = [
            {
              id: 1,
              name: 'Lentejas con pimiento',
              description: 'Potaje lentejas con verduras y pimiento',
              expirationDate: new Date('10/25/2017'),
              width: 1,
              height: 1,
              type: [
                {
                  id: 1,
                  name: 'Alimento',
                  description: 'Se puede comer'
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
                }
              ],
              shelf: SHELVES[10],

            },
            {
              id: 2,
              name: 'Alubias con alcachofa y jamon',
              description: 'Potaje de alubias con alcachofas y jamon',
              expirationDate: new Date('10/25/2017'),
              width: 1,
              height: 1,
              type: [
                {
                  id: 1,
                  name: 'Alimento',
                  description: 'Se puede comer'
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
                }
              ],
              shelf: SHELVES[10],

            },
            {
              id: 3,
              name: 'Alubias con alcachofa y jamon',
              description: 'Potaje de alubias con alcachofas y jamon',
              expirationDate: new Date('10/25/2017'),
              width: 1,
              height: 1,
              type: [
                {
                  id: 1,
                  name: 'Alimento',
                  description: 'Se puede comer'
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
                }
              ],
              shelf: SHELVES[10],

            },
            {
              id: 4,
              name: 'Queso manchego semi',
              description: 'Queso manchego semi',
              expirationDate: new Date('02/15/2018'),
              width: 1,
              height: 1,
              type: [
                {
                  id: 1,
                  name: 'Alimento',
                  description: 'Se puede comer'
                },
                {
                  id: 12,
                  name: 'Embutido',
                  description: 'Es un embutido'
                },
                {
                  id: 13,
                  name: 'Listo para comer',
                  description: 'Es un alimento/plato que esta listo para ser consumido sin mas elaboracion'
                }
              ],
              shelf: SHELVES[5],

            }
          ];
          for (let i = 0; i < ITEMS.length; i++) {
            this.addItem(ITEMS[i]);
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
  addItemType(itemType: IItemType): Promise<any> {
    return this.db.executeSql('insert into itemType(id, name, description) values (?, ?, ? )', [itemType.id, itemType.name, itemType.description]);
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
    return this.db.executeSql('insert into shelf(id, name, description, width, height, depth, location, shelfParent, typeId) values (?, ?, ?, ?, ?, ?, ?, ?, ? )', [shelf.id, shelf.name, shelf.description, shelf.width, shelf.height, shelf.depth, shelf.location, shelf.shelfParent, shelf.type.id]);
  };
  deleteShelf(id: number) {
    return this.db.executeSql('delete from shelf where id = ? ', [id]);
  }

  getItems(): Observable<IItem[]> {
    return Observable.fromPromise(
      this.db.executeSql('SELECT id, name, description, expirationDate, width, height, shelfId  FROM item', [])
        .then(data => {
          let results: IItem[] = [];
          for (let i = 0; i < data.rows.length; i++) {
            results.push(data.rows.item(i));
          }
          return results;
        }).catch(function () {
        return null;
      })
    );
  };
  addItem(item: IItem): Promise<any> {
    return this.db.executeSql('insert into item(id, name, description, expirationDate, width, height, shelfId) values (?, ?, ?, ?, ?, ?, ?)', [item.id, item.name, item.description, item.expirationDate.getTime(), item.width, item.height, item.shelf.id]);
  };
  deleteItem(id: number) {
    return this.db.executeSql('delete from item where id = ? ', [id]);
  }

}
