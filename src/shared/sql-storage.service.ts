import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {IShelfType} from "../models/shelf-type.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class SqlStorage {
  public db: SQLiteObject;

  constructor(private sqlite: SQLite) {
  }

  initializeDatabase() {
    return this.sqlite.create({name: 'depot.db', location: 'default'}).then(db => {
      this.db = db;

      this.createTableItemIfNotExists();
      this.createTableItemTypeIfNotExists();
      this.createTableShelfIfNotExists();
      this.createTableShelfTypeIfNotExists();

    }, (error) => {
      console.log("ERROR: ", error);
    });

  };

  private createTableItemIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS item (id integer primary key, name text, description text, expirationDate integer, width integer, height integer, typeId integer, shelfId integer)', [])
      .then(data => {
        console.info('Table item created ' + data);
      })
      .catch(e => console.error(e));
  };

  private createTableItemTypeIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS itemType (id integer primary key, name text, description text)', [])
      .then(data => {
        console.info('Table itemType created ' + data);
      })
      .catch(e => console.error(e));
  };

  private createTableShelfIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS shelf (id integer primary key, name text, description text, width integer, height integer, deepth integer, location text, shelfParent integer, typeId integer)', [])
      .then(data => {
        console.info('Table shelf created ' + data);
      })
      .catch(e => console.error(e));
  };

  private createTableShelfTypeIfNotExists() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS shelfType (id integer primary key, name text, description text)', [])
      .then(data => {
        console.info('Table shelfType created ' + data);
      })
      .catch(e => console.error(e));
  };

  getShelfTypes(): Observable<IShelfType[]> {
    return Observable.fromPromise(
      this.db.executeSql('SELECT id, name, description FROM shelfType', []).then(data => {
        let results: IShelfType[] = [];
        for (let i = 0; i < data.rows.length; i++) {
          // results.push(JSON.parse(data.rows.item(i)));
          results.push(data.rows.item(i));
        }
        return results;
      }).catch(function () {
        return null;
      })
    );
  };

  addShelfType(shelfType: IShelfType) {
    return this.db.executeSql('insert into shelfType(id, name, description) values (?, ?, ? )', [shelfType.id, shelfType.name, shelfType.description])
      .then(data => {
        if (data.rows.length > 0) {
          return JSON.parse(data.rows.item(0).value);
        }
      });
  }

  // getAll() {
  //   return this.db.executeSql('SELECT key, value FROM kv', []).then(data => {
  //     let results = [];
  //     for (let i = 0; i < data.rows.length; i++) {
  //       results.push(JSON.parse(data.rows.item(i).value));
  //     }
  //     return results;
  //   });
  // }
  //
  // get(key: string) {
  //   return this.db.executeSql('select key, value from kv where key = ? limit 1', [key]).then(data => {
  //     if (data.rows.length > 0) {
  //       return JSON.parse(data.rows.item(0).value);
  //     }
  //   });
  // }
  //
  // remove(key: string) {
  //   return this.db.executeSql('delete from kv where key = ?', [key]);
  // }
  //
  // set(key: string, value: string) {
  //   return this.db.executeSql('insert or replace into kv(key, value) values (?, ?)', [key, value]).then(data => {
  //     if (data.rows.length > 0) {
  //       return JSON.parse(data.rows.item(0).value);
  //     }
  //   });
  // }
  //
}
