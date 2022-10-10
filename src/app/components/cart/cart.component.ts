import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/products';
import { ProductsDBService } from 'src/app/Services/products-db.service';
import { ShoppingCartItems } from 'src/app/shopping-cart-items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output() cartItems:ShoppingCartItems[]


selectedProd:Products[] 
  constructor(
    private authProductsDB : ProductsDBService


  ) { 
    this.cartItems=[]
this.selectedProd=[]
    // this.cartItems = new EventEmitter
  }

  ngOnInit(): void {
    this.selectedProd = this.authProductsDB.selectedProds
    // console.log(this.selectedProd)
  }

}
