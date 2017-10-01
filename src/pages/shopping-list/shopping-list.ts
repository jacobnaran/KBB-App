import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';

import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';


/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    // Point shoppingListRef$ at Firebase -> 'shopping-list' node
    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  selectShoppingItem(shoppingItem: ShoppingItem){
    // Display an ActionSheet that gives the user options
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // Send the user to the EditShoppingItemPage and pass the key
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // Delete the current ShoppingItem
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user has selected the cancel button.");
          }
        }
      ]
    }).present();
    }

  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage);
  }

}
