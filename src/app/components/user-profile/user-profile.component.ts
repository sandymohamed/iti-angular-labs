import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName:string
  constructor(
    private authServ : AuthService

  ) {

    this.userName = this.authServ.name
   }

  ngOnInit(): void {
  }

}
