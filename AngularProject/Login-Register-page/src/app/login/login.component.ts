import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
    user = new User();
    tempvar: any;
    errormsg: string = "";
    constructor(private _service: RegistrationService, private _router: Router) { }

    ngOnInit(): void {
    }
  loginUser(){
      this.tempvar = this._service.loginUserFromRemote(this.user)

      if(this.tempvar==true)
      {
        this.user.id+=1;
      console.log(this.user.emailid);
      console.log(this.user.password);
      console.log(this.user.id);
        this._router.navigate(['/loginsuccess'])}
      else {
        console.log("Wrong Credentials Exception!!");
        this.errormsg="Wrong Credentials!!, Please enter Valid Emailid or Password";
      }
  }
  gotoregistration()
  {
    console.log("Register clicked");
    this._router.navigate(['/registration']);
  }

}
