import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BooksPage } from '../pages/books/books';
import { TutoringPage } from '../pages/tutoring/tutoring';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { ListBookPage } from '../pages/list-book/list-book';
import { TestFormPage } from '../pages/test-form/test-form';
import { ViewBookPage } from '../pages/view-book/view-book';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BooksPage,
    TutoringPage,
    ShoppingListPage,
    AddShoppingPage,
    ListBookPage,
    TestFormPage,
    ViewBookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialize AngularFire with credentials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database interactions
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BooksPage,
    TutoringPage,
    ShoppingListPage,
    AddShoppingPage,
    ListBookPage,
    TestFormPage,
    ViewBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
