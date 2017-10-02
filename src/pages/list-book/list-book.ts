import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Book } from '../../models/book/book.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-list-book',
  templateUrl: 'list-book.html',
})
export class ListBookPage {

  book = {} as Book
  listBookRef$: FirebaseListObservable<Book[]>

  submitAttempt: boolean
  bookForm: FormGroup

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private database: AngularFireDatabase) {

    this.listBookRef$ = this.database.list('books-list');
    this.submitAttempt = false;

    this.bookForm = formBuilder.group({
        bookTitle: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
        authors: [''],
        courseName: [''],
        courseCode: [''],
        price: ['$', Validators.compose([Validators.minLength(2), Validators.required])],
        seller: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
        sellerPhone: [''],
        sellerEmail: [''],
        notes: ['']
    });
  }

  dismiss() {
    this.navCtrl.pop();
  }
  addBook(book: Book) {

    this.submitAttempt = true;

    if (this.bookForm.valid) {
      this.listBookRef$.push({
        bookTitle: this.book.bookTitle,
        authors: (this.book.authors == null ? 'not provided' : this.book.authors),
        courseName: (this.book.courseName == null ? 'not provided' : this.book.courseName),
        courseCode: (this.book.courseCode == null ? 'not provided' : this.book.courseCode),
        price: this.book.price,
        seller: this.book.seller,
        sellerPhone: (this.book.sellerPhone == null ? 'not provided' : this.book.sellerPhone),
        sellerEmail: (this.book.sellerEmail == null ? 'not provided' : this.book.sellerEmail),
        notes: (this.book.notes == null ? '' : this.book.notes),
        timestamp: -1 * Date.now()
      });

      // Reset book object
      this.book = {} as Book;

      // Navigate the user back to the Books Page
      this.navCtrl.pop();
    }
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ListBookPage');
  }*/

}
