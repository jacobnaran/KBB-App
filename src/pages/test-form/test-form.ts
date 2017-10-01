import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';

/**
 * Generated class for the TestFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-form',
  templateUrl: 'test-form.html',
})
export class TestFormPage {

  submitAttempt: boolean
  testFormGroup: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.submitAttempt = false;

    this.testFormGroup = formBuilder.group({
        bookTitle: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
        courseName: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
        courseCode: ['', Validators.compose([Validators.maxLength(30), Validators.required])]
    });
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad TestFormPage');
  }*/

  submitForm() {
    this.submitAttempt = true;
    if (this.testFormGroup.valid) {
      this.navCtrl.setRoot(HomePage);
    }
  }
}
