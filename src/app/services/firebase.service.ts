import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import {Users} from '../Users';
import {Bets} from '../Bets';
import {Challenges} from '../Challenges';
import {Categories} from '../Categories';


@Injectable()
export class FirebaseService{
    users: FirebaseListObservable<Users[]>;
     bets: FirebaseListObservable<Bets[]>;
     challenges: FirebaseListObservable<Challenges[]>;
     categories: FirebaseListObservable<Categories[]>;
     bet: FirebaseObjectObservable<Bets[]>;
     folder: any;

    checkin: any;
    constructor(
        private _af: AngularFire,
        private router: Router, 
        ){
      this.folder = 'eventimages';
    }
    getUsers(user:string = null){
        if(user != null){
            this.users = this._af.database.list('/users/', {
                query: {
                    orderByChild: 'regUser',
                    equalTo: user
                }
            }) as 
            FirebaseListObservable<Users[]>
        } else {
            this.users = this._af.database.list('/users/') as 
            FirebaseListObservable<Users[]>
        }
        
        return this.users;
    }
   

    addUser(newUser){
        return this.users.push(newUser).then((item) => {
             console.log(item.key); 
            });
    }

    getBets(){
     this.bets = this._af.database.list('/bets', {
                query: {
                    orderByChild: 'date'
                }
            }) as 
            FirebaseListObservable<Bets[]>
    return this.bets;
}
addBet(thebet){
        return this.bets.push(thebet).then((item) => {
             console.log(item.key); 
               this.router.navigate(['/bets']);
            });
    }

    getChallenges(){
     this.challenges = this._af.database.list('/challenges', {
                query: {
                    orderByChild: 'date'
                }
            }) as 
            FirebaseListObservable<Challenges[]>
    return this.challenges;
}


    addChallenge(thecha){
        return this.challenges.push(thecha).then((item) => {
             console.log(item.key); 
               this.router.navigate(['/challenges']);
            });
    }
checkIn(eid,uid){
     const list = this._af.database.list('/events/'+eid+'/checkins');
     //const list = angularFire.database.list(`users/${uid}/collections`);
 //this.users = this._af.database.list('/users/') as FirebaseListObservable<Users[]>
   return list.push({regUser:uid}).then((item) => {
             //console.log(item.key); 
            });
    }
  getBetDetails(bid){
    this.bet = this._af.database.object('/bets/'+bid) as FirebaseObjectObservable<Bets>
    return this.bet;
  }
   getCategories(){
     this.categories = this._af.database.list('/categories', {
                query: {
                    orderByChild: 'name'
                }
            }) as 
            FirebaseListObservable<Categories[]>
    return this.categories;
}
addCategory(thecategory){
        return this.categories.push(thecategory);
    }
}