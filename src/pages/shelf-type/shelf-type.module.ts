import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShelfTypePage } from './shelf-type';

@NgModule({
  declarations: [
    ShelfTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ShelfTypePage),
  ],
})
export class ShelfTypePageModule {}
