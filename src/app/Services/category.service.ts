import { Injectable } from '@angular/core';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  productCategory: Category[]

  constructor() { 
    this.productCategory=[
      {id:1, name:"labtop"}, 
      {id:2, name:"IPad"},
      {id:3, name:"phone"},
     // {id:4 , name:"all"}
    ]
  }
}
