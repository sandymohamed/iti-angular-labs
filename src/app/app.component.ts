import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';

  isUserLogged: boolean  = false
constructor(
  private location: Location,
  private authServ : AuthService
){  }

ngOnInit(): void {
  // this.isUserLogged = this.authServ .get IsUserLogged();

this.authServ.UserLoggedStatus().subscribe(status=> {
  this.isUserLogged = status
})
}
goBack(){
    this.location.back()
  }
 
  userLogin(){
this.authServ.userLogin("userName", "password")
  }

  userLogout(){
    this.authServ.userLogout()

  }
}
