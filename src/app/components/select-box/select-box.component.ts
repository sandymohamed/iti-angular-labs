import { Component, OnChanges, OnInit , SimpleChanges} from '@angular/core';
import { Category } from 'src/app/category';
import { Products } from 'src/app/products';
import { ShoppingCartItems } from 'src/app/shopping-cart-items';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit, OnChanges {
  productCategory: Category[]
  selectedCategory:number=4

  productTotalPrice:number=0
  //selectedProduct: number=1
  // productsList: Products[];

  RecivedTotalPrice : number = 0
  recivedproductsListSelected:Products[]

  constructor() {
    this.recivedproductsListSelected =[]
    this.productCategory=[
      {id:1, name:"labtop"}, 
      {id:2, name:"IPad"},
      {id:3, name:"phone"},
      {id:4 , name:"all"}
    ]
   }
 ngOnChanges(changes: SimpleChanges): void {
   
 }

  ngOnInit(): void {
  }

  // onAddingToCart(price:number): void{
  //   this.productTotalPrice = price

  // }

  onTotalPriceChanged(total: number): void{
    this.RecivedTotalPrice = total
    console.log(this.RecivedTotalPrice)
}

OnproductsListSelectedChange(prod: Products): void{
  console.log("from sel" + prod)
   this.recivedproductsListSelected.push(prod)
  // console.log("from select"+this.recivedproductsListSelected)
}
}
