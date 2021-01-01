import { Injectable } from '@angular/core';
import {User} from './user';
import  {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  /* Temp instance of User class*/
  usertemp = new User();
  usert = new User();
  constructor() {}

  public registerusertoremote(user: User)
  {
    this.usert.id=1;
    var arr:User[]=[];
    for (let index = 0; index < this.usert.id; index++) {
    arr[index]=user;
   
  } 
  this.usert.id++;
  return arr;
  }

  public loginUserFromRemote(user: User){
    
    /* Temporary Holding of Credentials*/
   this.usertemp.emailid="cgchaitanya4@gmail.com";
   this.usertemp.password="test123";

   /*When loginfromremote fn is called from login component,
    an instance of user containg reponse from form will be passed here, 
    then it will verify values with localtemp instance*/
    

   if ((user.emailid==this.usertemp.emailid) && user.password==this.usertemp.password) {
        return true;
   }
    return false; 
        
    
    /* WILL ADD CODE HERE TO LINK WITH SERVER */
  }
}



