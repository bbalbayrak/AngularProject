import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { AlertifyService } from './alertify.service';

@Injectable()
export class AccountService {

  constructor(private alertifyService:AlertifyService) { }
loggedIn = false;
login(user:User):boolean{
if(user.userName == "burak" && user.password == "123456"){
  this.loggedIn = true;
  localStorage.setItem("isLogged", user.userName);
  return true;
}else{
  this.alertifyService.error(user.userName + " Something Is Wrong")
  //alert("Something is Wrong")
  return false;
  
}
}
isLoggedIn(){
  return this.loggedIn;
}

logOut(){
  localStorage.removeItem("isLogged");
  this.loggedIn = false;
}
}
