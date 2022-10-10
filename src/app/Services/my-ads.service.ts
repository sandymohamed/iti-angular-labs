import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyAdsService {
  private adsList: string[]

  constructor() {
    this.adsList = ["firstAD", "secondAD", "thirdAD", "FourthAD", "", "finalAD"]
  
  
  }

  getMyAds(intervInsec: number): Observable<string>{
    return new Observable<string>(observer => {

      let myCounter = 0;
      let myInterval = setInterval(()=>{
        if(myCounter == this.adsList.length)
        {
          observer.complete();
        }else if(this.adsList[myCounter] ==""){
          observer.error("add can't be empty");

        }
        observer.next(this.adsList[myCounter]);
        myCounter++;
      },intervInsec*1000)


      return {
        unsubscribe(){
          clearInterval(myInterval);
          console.log("unsubscribe....")
        }
      }
     })

  }



}
