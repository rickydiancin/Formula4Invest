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
import { AddEventComponent } from './add-event/add-event.component';
import { HomeComponent } from './home/home.component';

// Must export the config
export const firebaseConfig = {
 apiKey: "AIzaSyARWLIA36MUInqrrL8UCNc-o1xYB9zmEfA",
    authDomain: "ding-web.firebaseapp.com",
    databaseURL: "https://ding-web.firebaseio.com",
    storageBucket: "ding-web.appspot.com",
    messagingSenderId: "133754945571"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent,
    AddEventComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
