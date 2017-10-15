import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { Routes, RouterModule } from '@angular/router';
import { IdleComponent } from './idle/idle.component';
import { ChoosePaymentComponent } from './choose-payment/choose-payment.component';
import { ByeComponent } from './bye/bye.component';
import { IdleModule } from './idle/idle.module';
import { ChoosePaymentModule } from './choose-payment/choose-payment.module';
import { ByeModule } from './bye/bye.module';
import { WaitingModule } from './waiting/waiting.module';
import { WaitingComponent } from './waiting/waiting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeModule } from './welcome/welcome.module';

const firebase = {
  piKey: "AIzaSyA19HmgnAyzvMlFnMkuOq-7AbpIsi5LLdA",
  authDomain: "fos-terminal-b7b2c.firebaseapp.com",
  databaseURL: "https://fos-terminal-b7b2c.firebaseio.com",
  projectId: "fos-terminal-b7b2c",
  storageBucket: "fos-terminal-b7b2c.appspot.com",
  messagingSenderId: "185271082136"
};

const appRoutes: Routes = [
  { path: 'idle', component: IdleComponent },
  { path: 'checkout', component: ChoosePaymentComponent },
  { path: 'bye', component: ByeComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '',
    redirectTo: '/idle',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    IdleModule,
    ChoosePaymentModule,
    ByeModule,
    WaitingModule,
    WelcomeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
