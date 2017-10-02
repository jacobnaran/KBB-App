import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KEvent } from '../../models/kevent/kevent.interface';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-list-event',
  templateUrl: 'list-event.html',
})
export class ListEventPage {

  ev = {} as KEvent
  listEventRef$: FirebaseListObservable<KEvent[]>

  submitAttempt: boolean
  eventForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private database: AngularFireDatabase) {
    this.listEventRef$ = this.database.list('events-list');
    this.submitAttempt = false;

    this.eventForm = formBuilder.group({
        title: ['', Validators.required],
        location: [''],
        description: ['', Validators.required],
        contact: ['']
    });
  }

  addEvent() {

    this.submitAttempt = true;

    if (this.eventForm.valid) {
      this.listEventRef$.push({
        title: this.ev.title,
        location: (this.ev.location == null ? 'none provided' : this.ev.location),
        description: this.ev.description,
        contact: (this.ev.contact == null ? 'none provided' : this.ev.contact)
      });

      // Reset event object
      this.ev = {} as KEvent;

      // Navigate the user back to the Events
      this.navCtrl.pop();
    }
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventPage');
  }*/

}
