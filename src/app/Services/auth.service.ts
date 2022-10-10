import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isloggedSubject: BehaviorSubject<boolean> 
name :string;
  constructor() { 
    this.isloggedSubject = new BehaviorSubject<boolean> (false)
    this.name= ''
  }

userLogin(userName: string, password: string){

  let userToken = "s123"
  localStorage.setItem("token", userToken)
  this.isloggedSubject.next(true)
  console.log('in')
}
userLogout(){
  localStorage.removeItem("token")
  this.isloggedSubject.next(false)
  console.log('out')


}

 IsLogged():boolean {
return(localStorage.getItem("token")) ? true : false
}

UserLoggedStatus(): Observable<boolean>{
  return this.isloggedSubject.asObservable();
}



}
