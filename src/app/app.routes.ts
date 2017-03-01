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
import { AddEventComponent } from './add-event/add-event.component';


export const router: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },
     { path: '', children:[
         { path: 'login', component: LoginComponent},
         { path: 'signup', component: SignupComponent },
       // { path: 'signup', component: SignupComponent},
         { path: '' , component: HomeComponent},
        { path: '' , component: HeaderComponent, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}
     ]},
     
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
     { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] }


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);