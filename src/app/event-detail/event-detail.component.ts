import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

   id:any;
   event: any;

  constructor(
    public af: AngularFire,
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
      this.af.auth.subscribe(auth => {
      if(auth) {
        console.log('uid: '+auth.uid);
        //this.name = auth;
           // Get ID
    this.id = this.route.snapshot.params['id'];
        console.log(this.id);

      }
    });

  }


  ngOnInit() {

    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getEventDetails(this.id).subscribe(event => {
      this.event = event;


    });

  }


addCheckin(){
  
}
  

}
