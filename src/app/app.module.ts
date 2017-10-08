import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import  { HomePage, AdminPage,ShelfPage, ShelfTypePage, ItemTypePage } from '../pages/pages';
import { DepotDb, SqlStorage } from "../shared/shared";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    ShelfPage,
    ShelfTypePage,
    ItemTypePage
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
    ItemTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlStorage,
    DepotDb,
    SQLite
  ]
})
export class AppModule {}
