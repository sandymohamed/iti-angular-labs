import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { MyAdsService } from 'src/app/Services/my-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

private mysubscription !:Subscription
isUserLogged: boolean  = false

  constructor(
    private adsServ : MyAdsService,
    private authServ : AuthService,

  ) { }

  ngOnInit(): void {
    let observer = {
      next:( data:String) => {console.log(data)},
      error: (err:string) => {console.log(err)},
      complete: (() => {console.log("done.")}),

    }

  this.mysubscription=  this.adsServ.getMyAds(1).subscribe(observer)

  this.authServ.UserLoggedStatus().subscribe(status=> {
    this.isUserLogged = status
  })


  }


  ngOnDestroy(): void {
    this.mysubscription.unsubscribe();
  }


  userLogin(){
    this.authServ.userLogin("userName", "password")

      }
      
   userLogout(){
        this.authServ.userLogout()
    
      }
}
