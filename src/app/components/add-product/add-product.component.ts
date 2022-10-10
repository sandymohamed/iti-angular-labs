import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';
import { Products } from 'src/app/products';
import { ProductsDBService } from 'src/app/Services/products-db.service';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productCategory: Category[];
  newProduct: Products ={} as Products
  constructor(
    private prdServ: ProductsDBService,
    private catServ: CategoryService,
    private router:Router
  ) { 

 this.productCategory=this.catServ.productCategory
  }

  ngOnInit(): void {
  }

  addProduct(){
    // const product:Products={
    //   id: 16,
    //   name: "string",
    //   price: 215,
    //   quantity: 5,
    //   imgURL :"",
    //   categoryID: 1,
         
    // }
    this.prdServ.addnewProduct(this.newProduct).subscribe((product)=>{
      alert("added succefully")
      this.router.navigateByUrl('/cart')
    }
    )
  }
}
