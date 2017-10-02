import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

import { KEvent } from '../../models/kevent/kevent.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'view-event',
  templateUrl: 'view-event.html'
})
export class ViewEventComponent {

  ev = {} as KEvent

  // reference to database
    viewEventRef$: FirebaseListObservable<KEvent[]>

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              private database: AngularFireDatabase) {

    this.ev = this.navParams.get('ev');
    this.viewEventRef$ = this.database.list('events-list');
  }

  removeListing() {
    this.viewEventRef$.remove(this.ev.$key);
    this.navCtrl.pop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
