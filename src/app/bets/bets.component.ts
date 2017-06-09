import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {Bets} from '../Bets';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {
bets:Bets[];
   theuser: any;
  constructor(private _firebaseService:FirebaseService) { 


  }

   ngOnInit() {
     this._firebaseService.getBets().subscribe(bets => {
     //console.log(bets);
      this.bets = bets;

           this._firebaseService.getUsers(bets[0].regUser).subscribe(theuser => {
     console.log(theuser);
      this.theuser = theuser;
    });


    });

  }

}
