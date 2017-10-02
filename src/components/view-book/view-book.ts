import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

import { Book } from '../../models/book/book.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-view-book',
  templateUrl: 'view-book.html'
})

export class ViewBookModal {

  book = {} as Book

  // reference to database
  viewBookRef$: FirebaseListObservable<Book[]>

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private database: AngularFireDatabase) {
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
