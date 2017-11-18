import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminPage } from "../pages";
import {WhatIHavePage} from "../what-i-have/what-i-have";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { };

  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }

  goToWhatIHave(){
    this.navCtrl.push(WhatIHavePage);
  }
}
