import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../products';
import { ProductsDBService } from '../../Services/products-db.service';
import { ProductsServiceService } from '../../Services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProdId: number=0
  product :Products ={} as Products
  productsId : number[]=[]
  // currentIndex: number=0


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsServiceService,
    private location: Location,
    private router: Router,
    // private productServ: ProductsDBService

  ) { }

  ngOnInit(): void {
    // this.currentProdId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.productsId = this.productService.getProductsIds()

    this.activatedRoute.paramMap.subscribe((paramMap)=> {
      this.currentProdId = Number(paramMap.get('id'))
      this.product = this.productService.getProductsById(this.currentProdId)

    })
  }

  goBack(){
    this.location.back()
  }

  previousProd(){

let currentIndex = this.productsId.findIndex(ele=> ele== this.currentProdId)
console.log(currentIndex)
if(currentIndex > 0){
  let prevId = this.productsId[currentIndex - 1]
  this.router.navigate(['/products',prevId])

}


  }

  nextProd(){
    let currentIndex = this.productsId.findIndex(ele=> ele== this.currentProdId)
if(currentIndex < this.productsId.length -1){
  let prevId = this.productsId[currentIndex + 1]
  this.router.navigate(['/products',prevId])

}
  }
}
