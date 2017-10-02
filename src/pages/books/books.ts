import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';

import { ViewBookModal } from '../../components/view-book/view-book';
import { ListBookPage } from '../list-book/list-book';
import { Book } from '../../models/book/book.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})

export class BooksPage {

  // reference to database
  booksPageRef$: FirebaseListObservable<Book[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private database: AngularFireDatabase) {
    this.booksPageRef$ = this.database.list('books-list', {query: {orderByChild: 'timestamp'}});
  }

  navigateToListBookPage() {
    this.navCtrl.push(ListBookPage);
  }

  showViewBookModal(book: Book) {
    // paramName: param
//    this.navCtrl.push(ViewBookPage, {book: book});
    let modal = this.modalCtrl.create(ViewBookModal, {book: book});
    modal.present();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }*/

}
