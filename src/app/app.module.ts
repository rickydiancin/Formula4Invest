import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './services/auth.service';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { BrowseEventsComponent } from './browse-events/browse-events.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { CategoriesComponent } from './categories/categories.component';
import { BetComponent } from './bet/bet.component';
import { StocksComponent } from './stocks/stocks.component';
import { CompanyComponent } from './company/company.component';
import { StocksConfirmComponent } from './stocks-confirm/stocks-confirm.component';
import { BetsComponent } from './bets/bets.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { RaceComponent } from './race/race.component';

// Must export the config
export const firebaseConfig = {
 apiKey: "AIzaSyCWsLAKJTWc_M_-TPKSv2NVJ8zdSxIwvoI",
    authDomain: "formula4invest.firebaseapp.com",
    databaseURL: "https://formula4invest.firebaseio.com",
    storageBucket: "formula4invest.appspot.com",
    messagingSenderId: "1010961284206"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component,
    BrowseEventsComponent,
    CategoriesComponent,
    BetComponent,
    StocksComponent,
    CompanyComponent,
    StocksConfirmComponent,
    BetsComponent,
    ChallengeComponent,
    ChallengesComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
