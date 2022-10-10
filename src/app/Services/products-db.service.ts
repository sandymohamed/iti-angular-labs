import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsDBService {

  httpOptions;
  selectedProds: Products[]=[];
  constructor(
    private httpClient: HttpClient,
  ) {


    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
   }
  
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error('an error ocuured: ', error.error)

    }else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error)
    }
    return throwError(
      ()=> new Error('error occured, please try again. ')
    )
  }
  

  getAllProd() :Observable<Products[]>
  {
  return  this.httpClient.get<Products[]>(`${environment.APIURL}/productsList`)
  .pipe(
    retry(2),
    catchError(this.handleError)
    )
  }

  getProdByCategory(catId:number):Observable<Products[]>{
    return   this.httpClient.get<Products[]>(`${environment.APIURL}/productsList?categoryID=${catId}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )
  }

  getProdByID(id:number):Observable<Products[]> {
    return  this.httpClient.get<Products[]>(`${environment.APIURL}/productsList/${id}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )
  }

  addnewProduct(newProduct: Products): Observable<Products>{
    return this.httpClient
    .post<Products>(`${environment.APIURL}/productsList`, 
    JSON.stringify(newProduct), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
      )

  }
  updateProd(prodID:number, updatePrd: Products){

  
  }

  deleteProd(id:number){

  }


  onSelect(item:Products){
    console.log(item)
    this.selectedProds.push(item)
  }


}
