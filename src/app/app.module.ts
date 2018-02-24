import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import  { HomePage, AdminPage,ShelfPage, ShelfTypePage, ItemTypePage, AddItemTypePage } from '../pages/pages';
import { DepotDb, SqlStorage } from "../shared/shared";
import { DepotDbMock } from '../shared/depot-db.mock.service';
//todo test commenting line above, and deploying on android,
import {WhatIHavePage} from "../pages/what-i-have/what-i-have";

import { SQLite , SQLiteDatabaseConfig } from '@ionic-native/sqlite';

declare var SQL;

class SQLiteMock {
  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    var db;
    var storeddb = localStorage.getItem("database");

    if(storeddb)
    {
      var arr = storeddb.split(',');
      db = new SQL.Database(arr);
    }
    else
    {
      db = new SQL.Database();
    }

    return new Promise((resolve,reject)=>{
      resolve(new SQLiteObject(db));
    });
  }
}

class SQLiteObject {
  _objectInstance: any;
  constructor(_objectInstance: any) {
    this._objectInstance = _objectInstance;
  };

  executeSql(statement: string, params: any): Promise<any> {

    return new Promise((resolve, reject) => {
      try {
        var st = this._objectInstance.prepare(statement, params);
        var rows: Array<any> = [];
        while (st.step()) {
          var row = st.getAsObject();
          rows.push(row);
        }
        var payload = {
          rows: {
            item: function (i) {
              return rows[i];
            },
            length: rows.length
          },
          rowsAffected: this._objectInstance.getRowsModified() || 0,
          insertId: this._objectInstance.insertId || void 0
        };

        //save database after each sql query
        var arr: ArrayBuffer = this._objectInstance.export();
        localStorage.setItem("database", String(arr));
        resolve(payload);
      } catch (e) {
        reject(e);
      }
    });
  };
}

//todo search the window element to check if we have real SQLitle available an use it for security(in case we are in the tablet)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    ShelfPage,
    ShelfTypePage,
    ItemTypePage,
    WhatIHavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    ShelfPage,
    ShelfTypePage,
    ItemTypePage,
    WhatIHavePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlStorage,
    DepotDb,
    DepotDbMock,
    {provide: SQLite, useClass: SQLiteMock},
  ]
})
export class AppModule {}
