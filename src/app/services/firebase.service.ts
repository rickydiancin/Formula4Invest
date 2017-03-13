import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Users} from '../Users';
import {Events} from '../Events';
import {Categories} from '../Categories';


@Injectable()
export class FirebaseService{
    users: FirebaseListObservable<Users[]>;
     events: FirebaseListObservable<Events[]>;
     categories: FirebaseListObservable<Categories[]>;
     event: FirebaseObjectObservable<Events[]>;

    checkin: any;
    constructor(private _af: AngularFire){
    
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

    getEvents(){
     this.events = this._af.database.list('/events', {
                query: {
                    orderByChild: 'date'
                }
            }) as 
            FirebaseListObservable<Events[]>
    return this.events;
}

  getEventDetails(id){
    this.event = this._af.database.object('/events/'+id) as FirebaseObjectObservable<Events>
    return this.event;
  }
addEvent(theevent){
        return this.events.push(theevent);
    }
checkIn(eid,uid){
     const list = this._af.database.list('/events/'+eid+'/checkins');
     //const list = angularFire.database.list(`users/${uid}/collections`);
 //this.users = this._af.database.list('/users/') as FirebaseListObservable<Users[]>
   return list.push({regUser:uid}).then((item) => {
             //console.log(item.key); 
            });
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