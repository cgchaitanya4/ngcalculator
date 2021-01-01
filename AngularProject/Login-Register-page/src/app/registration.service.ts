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
  public arr:User[]=[];
  constructor() {}
  clk = 1;

  
  public registerusertoremote(user: User)
  {
    this.usert.id=1;
    this.usert.emailid=user.emailid;
    this.usert.password=user.password;
    for (let index = 0; index < this.clk; index++) {
    this.arr[index]=user;
  } 
    this.clk++;
    this.usert.id++;
    return this.arr;
  }

  public loginUserFromRemote(user: User){
    

     /* Temporary Holding of Credentials*/
   this.usertemp.emailid="admin@admin.com";
   this.usertemp.password="admin";

   /*When loginfromremote fn is called from login component,
    an instance of user containg reponse from form will be passed here, 
    then it will verify values with localtemp instance*/
    

   if ((user.emailid==(this.usertemp.emailid || this.usert.emailid)) && (user.password==(this.usertemp.password || this.usert.password))  ) {
        return true;
   }
    return false; 
        
    
    /* WILL ADD CODE HERE TO LINK WITH SERVER */
  }
}



