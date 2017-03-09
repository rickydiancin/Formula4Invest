import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Events} from '../Events';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:Events[];


  constructor(private _firebaseService:FirebaseService) { 


  }

  ngOnInit() {
   this._firebaseService.getEvents().subscribe(events => {
       console.log(events);
      this.events = events;
    });

  }

}
