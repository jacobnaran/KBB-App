import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestFormPage } from './test-form';

@NgModule({
  declarations: [
    TestFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TestFormPage),
  ],
})
export class TestFormPageModule {}
