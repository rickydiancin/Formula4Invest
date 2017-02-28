import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {FirebaseService} from '../services/firebase.service';
import {Users} from '../Users';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''},
  providers: [FirebaseService]
})
export class MembersComponent implements OnInit {
  name: any;
  currentUser: any;
  state: string = '';
   users:Users[];
  

  constructor(public af: AngularFire,private router: Router, private _firebaseService:FirebaseService) {

    this.af.auth.subscribe(auth => {
      if(auth) {
      //  console.log(auth.uid);
        this.name = auth;
       // console.log(this.name);
     this._firebaseService.getTheUsers(auth.uid).subscribe(users => {
      this.users = users;
      // console.log(users[0].$value);
   // console.log(users[2].$value);

    this.currentUser = users[2].$value;
    });




       // this.currentUser = 
      }
    });

  }

  logout() {
     this.af.auth.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {

  }

}