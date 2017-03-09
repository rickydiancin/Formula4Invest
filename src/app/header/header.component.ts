import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {FirebaseService} from '../services/firebase.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
    providers: [FirebaseService]
})
export class HeaderComponent implements OnInit {
 
  constructor(public af: AngularFire,private router: Router, private _firebaseService:FirebaseService) { }

  logout() {
     this.af.auth.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }
 

  ngOnInit() {
   

  }

}
