import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  // javascript object cast as ShoppingItem
  shoppingItem = {} as ShoppingItem

  // $ because observable; ref for reference
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    // it seems as though this "casting" of a database entry to a shoppingItem object matches value names itemName
    // and itemNumber. when I change the database columns to 'a' and 'b' it no longer recognizes, but the key is fine.
    /*
      Create a new anonymous object and convert itemNumber to a number.
      Push this to our Firebase database under the 'shopping-list' node.
    */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    // Reset our shopping item
    this.shoppingItem = {} as ShoppingItem;

    // Navigate the user back to the ShoppingListPage
    this.navCtrl.pop();
  }

}
