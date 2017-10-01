import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewBookPage } from '../view-book/view-book';
import { ListBookPage } from '../list-book/list-book';
import { Book } from '../../models/book/book.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  // reference to database
  booksPageRef$: FirebaseListObservable<Book[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.booksPageRef$ = this.database.list('books-list', {query: {orderByChild: 'timestamp'}});
  }

  navigateToListBookPage() {
    this.navCtrl.push(ListBookPage);
  }

  navigateToViewBookPage(book: Book) {
    // paramName: param
    this.navCtrl.push(ViewBookPage, {book: book});
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }*/

}
