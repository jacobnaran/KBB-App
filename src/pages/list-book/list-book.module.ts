import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListBookPage } from './list-book';

@NgModule({
  declarations: [
    ListBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBookPage),
  ],
})
export class ListBookPageModule {}
