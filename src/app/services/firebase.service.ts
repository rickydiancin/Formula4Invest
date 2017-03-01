import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Users} from '../Users';


@Injectable()
export class FirebaseService{
    users: FirebaseListObservable<Users[]>;
    
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

}