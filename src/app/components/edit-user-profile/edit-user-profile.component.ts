import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  userName:any;

  constructor(
    private authServ : AuthService

  ) {
this.userName="user"
   }

  ngOnInit(): void {

  }
  edituser(){
    this.authServ.name = this.userName
  }


}
