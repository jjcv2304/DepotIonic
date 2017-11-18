import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { HomePage } from '../pages/pages';
import { DepotDb } from "../shared/shared";
import {TechDAO} from "../shared/techdao";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  public sqlstorage: SQLite;
  techdao: TechDAO;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public DepotDb: DepotDb,
    public splashScreen: SplashScreen) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
     // this.initDatabase();
     // this.initializeSQLite();
      this.splashScreen.hide();
    });
  }


  initDatabase() {
    this.DepotDb.initStorage().then(() => {
      console.log('Db initialized');
    });
  };

  initializeSQLite() {
    this.sqlstorage = new SQLite();
    this.techdao = new TechDAO(this.sqlstorage);

    this.techdao.createTables();
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
