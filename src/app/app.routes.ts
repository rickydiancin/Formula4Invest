import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { BetComponent } from './bet/bet.component';
import { RaceComponent } from './race/race.component';
import { BetsComponent } from './bets/bets.component';
import { StocksComponent } from './stocks/stocks.component';
import { CompanyComponent } from './company/company.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { StocksConfirmComponent } from './stocks-confirm/stocks-confirm.component';


export const router: Routes = [
   // { path: 'home', redirectTo: '', pathMatch: 'full' },
     { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'bet', component: BetComponent, canActivate: [AuthGuard] },
    { path: 'bets', component: BetsComponent, canActivate: [AuthGuard] },
    { path: 'stocks', component: StocksComponent, canActivate: [AuthGuard] },
     { path: 'stocks/:price', component: CompanyComponent, canActivate: [AuthGuard] },
        { path: 'stocks/:price/:company', component: StocksConfirmComponent, canActivate: [AuthGuard] },
     { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
      { path: 'challenge/:bid', component: ChallengeComponent, canActivate: [AuthGuard] },
      { path: 'challenges', component: ChallengesComponent, canActivate: [AuthGuard] },
       { path: 'race/:rid', component: RaceComponent, canActivate: [AuthGuard] }
    // { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] }


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);