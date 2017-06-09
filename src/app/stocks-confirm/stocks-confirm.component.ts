import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
import {Bets} from '../Bets';

@Component({
  selector: 'app-stocks-confirm',
  templateUrl: './stocks-confirm.component.html',
  styleUrls: ['./stocks-confirm.component.scss']
})
export class StocksConfirmComponent implements OnInit {
bets:Bets[];
 price:any;
  company:any;
  bet: any;
   type:any;
  amount:any;
   date:any;


  constructor(
    private _firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
    public af: AngularFire
  ) { 
 

  }


  ngOnInit() {      // Get PRICE
    this.price = this.route.snapshot.params['price'];
    this.company = this.route.snapshot.params['company'];

       this._firebaseService.getBets().subscribe(bets => {
     //console.log(bets);
      this.bets = bets;
    });

  }

      addBetSubmit(){
        console.log('add bet');
            this.af.auth.subscribe(auth => {
      if(auth) {
        var thedate = new Date().toString();   

    let thebet = {
      type: 'Stocks',
      amount: this.price,
      company: this.company,
      date: thedate,
      regUser: auth.uid

    }
     //console.log(auth);

    this._firebaseService.addBet(thebet);
     }
      });
  //this.flashMessage.show('Event successfully created!',
    //{cssClass: 'alert-success', timeout: 3000});
   //this.router.navigate(['/events']);
  }

}
