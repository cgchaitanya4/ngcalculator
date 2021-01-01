import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  ruser = new User();
  constructor( private _service:RegistrationService ,private _router: Router) {}

  ngOnInit(): void {
  }
registeruser(){
  var arr:User[] = this._service.registerusertoremote(this.ruser);
  console.log(this.ruser.emailid);
  console.log(this.ruser.id);
  console.log(this.ruser.password);
  console.log(this.ruser.username);
  for (let index = 0; index < arr.length; index++) { 
    console.log(arr[index]);
    
  }
  
}

}
