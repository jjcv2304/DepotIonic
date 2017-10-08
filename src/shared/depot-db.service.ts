import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SqlStorage } from './sql-storage.service';

const win: any = window;

@Injectable()
export class DepotDb {
  private sqlMode = false;

  constructor(public events: Events, public storage: Storage, private sql: SqlStorage) {
    if (win.sqlitePlugin) {
      this.sqlMode = true;
    } else {
      console.warn('SQLite plugin not installed. Falling back to regular Ionic Storage.');
    }
  }

  initStorage(): Promise<any> {
    if (this.sqlMode) {
      return this.sql.initializeDatabase();
    } else {
      return new Promise(resolve => resolve());
    }
  }

  getAllFavorites(): Promise<any[]> {
    if (this.sqlMode) {
      return this.sql.getAll();
    } else {
      return new Promise(resolve => {
        let results = [];
        this.storage.forEach(data => {
          console.log('***inside foreach', data);
          results.push(JSON.parse(data));
        });
        return resolve(results);
      });
    }
  }
}