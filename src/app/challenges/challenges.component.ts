import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Challenges} from '../Challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

     challenges:Challenges[];
      thehost: any;
        thechallenger: any;
    
  constructor(
      private _firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
        public af: AngularFire
  ) { }

  ngOnInit() {
        this._firebaseService.getChallenges().subscribe(challenges => {
      this.challenges = challenges;
     // console.log(this.challenges);

    this._firebaseService.getUsers(challenges[0].host).subscribe(thehost => {
     console.log(thehost);
      this.thehost = thehost;
    });

        this._firebaseService.getUsers(challenges[0].challenger).subscribe(thechallenger => {
     console.log(thechallenger);
      this.thechallenger = thechallenger;
    });

    });
  }

}
