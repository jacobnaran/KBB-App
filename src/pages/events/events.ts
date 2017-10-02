import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { ViewEventComponent } from '../../components/view-event/view-event';
import { ListEventPage } from '../list-event/list-event';
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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.eventsPageRef$ = this.database.list('events-list', {query: {orderByChild: 'datetime'}});
  }

  navigateToListEventPage() {
    this.navCtrl.push(ListEventPage);
  }

  showViewEventModal(ev: KEvent) {
    // paramName: param
    let modal = this.modalCtrl.create(ViewEventComponent, {ev: ev});
    modal.present();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }*/

}
