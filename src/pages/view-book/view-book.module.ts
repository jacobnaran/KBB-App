import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBookPage } from './view-book';

@NgModule({
  declarations: [
    ViewBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBookPage),
  ],
})
export class ViewBookPageModule {}
