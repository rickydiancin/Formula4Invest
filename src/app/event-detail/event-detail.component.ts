import { Component, OnInit } from '@angular/core';
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
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { 

  }


  ngOnInit() {

    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getEventDetails(this.id).subscribe(event => {
      this.event = event;


    });

  }

}
