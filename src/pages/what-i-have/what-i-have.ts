import { Component } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";


@Component({
  selector: 'page-what-i-have',
  templateUrl: 'what-i-have.html'
})
export class WhatIHavePage {
  public database: SQLiteObject;
  public invoices: Array<Object>;
  public counter : number = 0;
  constructor(private sqlite : SQLite) {
  }

}
