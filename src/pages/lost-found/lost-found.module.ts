import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostFoundPage } from './lost-found';

@NgModule({
  declarations: [
    LostFoundPage,
  ],
  imports: [
    IonicPageModule.forChild(LostFoundPage),
  ],
})
export class LostFoundPageModule {}
