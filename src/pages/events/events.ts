import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { ViewEventPage } from '../view-event/view-event';
//import { ListEventPage } from '../list-event/list-event';
import { KEvent } from '../../models/kevent/kevent.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})

export class EventsPage {

  // reference to database
  eventsPageRef$: FirebaseListObservable<KEvent[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.eventsPageRef$ = this.database.list('events-list', {query: {orderByChild: 'datetime'}});
  }

  navigateToListEventPage() {
    //this.navCtrl.push(ListEventPage);
  }

  navigateToViewEventPage(ev: KEvent) {
    // paramName: param
    //this.navCtrl.push(ViewBookPage, {ev: ev});
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }*/

}
