import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Book } from '../../models/book/book.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ViewBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-view-book',
  templateUrl: 'view-book.html'
})
export class ViewBookPage {

  book = {} as Book

  // reference to database
  viewBookRef$: FirebaseListObservable<Book[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.book = this.navParams.get('book');
    this.viewBookRef$ = this.database.list('books-list');
  }

  removeListing() {
    this.viewBookRef$.remove(this.book.$key);
    this.navCtrl.pop();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBookPage');
  }*/

}
