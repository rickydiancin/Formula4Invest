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
  //host: {'[@moveIn]': ''},
  providers: [FirebaseService]
})
export class MembersComponent implements OnInit {
  name: any;
 
  state: string = '';
   users:Users[];
    currentUser: any;
  

  constructor(public af: AngularFire,private router: Router, private _firebaseService:FirebaseService) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        //console.log(auth.uid);
        this.name = auth;
      // console.log(this.name);
     this._firebaseService.getUsers(auth.uid).subscribe(users => {
      this.users = users;
    // console.log(this.users);
   //console.log(users[0]);

    this.currentUser = users[0].firstname + ' ' + users[0].lastname ;
    //console.log(this.currentUser);
    });

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