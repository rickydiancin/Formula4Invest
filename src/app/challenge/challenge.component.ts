import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Bets} from '../Bets';
import {Challenges} from '../Challenges';
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  regUser: any;
   type: any;
   amount: any;
   company: any;
    bid:any;
    bet:Bets[];
     challenges:Challenges[];
   thebid:any;
  host:any;
  challenger:any;
   date:any;
   

  constructor(
      private _firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
        public af: AngularFire
  ) { }

  ngOnInit() {
         // Get ID
    this.bid = this.route.snapshot.params['bid'];
      console.log(this.bid);

  this._firebaseService.getBetDetails(this.bid).subscribe(bet => {
      this.bet = bet;
      console.log(this.bet);
    });

      this._firebaseService.getChallenges().subscribe(challenges => {
      this.challenges = challenges;
      console.log(this.challenges);
    });


  }

  challengeSubmit(hostid){

        console.log(hostid);

            this.af.auth.subscribe(auth => {
      if(auth) {
        var thedate = new Date().toString();   

    let challenge = {
   bid: this.bid,
  host: hostid,
  challenger: auth.uid,
   date: thedate

    }

this._firebaseService.addChallenge(challenge);

      }

 });

  }

}