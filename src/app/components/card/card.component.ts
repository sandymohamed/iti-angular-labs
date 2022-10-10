import { Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/category';
import { Products } from 'src/app/products';
import { ProductsDBService } from 'src/app/Services/products-db.service';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ShoppingCartItems } from 'src/app/shopping-cart-items'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
//1
  productsList: Products[]
  // selectedProducts: ShoppingCartItems[]
  model: any = {};

  task: Array<any> = [];
  totalPrice: number = 0
  //1
  filtering: Products[]

  mycolor: string = "#fff"
  

  @Input() selectedCategory: number = 4


  // @Output() productsListSelected = EventEmitter<Products>;

  // @Output() AddProduct : EventEmitter<Products> ;

  @Output() totalPriceChanged: EventEmitter<number>

  @Output() AddProduct: EventEmitter<Products>

  constructor( 
    private productDBServ: ProductsDBService,
    private ProductsServ :ProductsServiceService
  ) {
    this.totalPriceChanged = new EventEmitter<number>()
    this.AddProduct = new EventEmitter<Products>()

    // this.productsListSelected = new EventEmitter<Products>()
    // this.AddProduct = new EventEmitter<Products>();
 
    this.filtering = []
    this.productsList = [
      {
        id: 1,
        name: 'Phone Mockup',
        price: 500,
        quantity: 5,
        imgURL: "https://img.freepik.com/free-psd/phone-mockup-3d-render-podium-with-clean-background_135149-37.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 3,
      },
      {
        id: 2,
        name: 'oppo',
        price: 800,
        quantity: 1,
        imgURL: "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 3,
      },
      {
        id: 3,
        name: 'iphone',
        price: 900,
        quantity: 3,
        imgURL: "https://img.freepik.com/free-psd/cyber-monday-sale-assortment-with-phone-mock-up_23-2148659819.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 3,
      },
      {
        id: 4,
        name: 'samsung',
        price: 1200,
        quantity: 6,
        imgURL: "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 1,
      },
      {
        id: 5,
        name: 'lenovo',
        price: 1500,
        quantity: 3,
        imgURL: "https://img.freepik.com/premium-psd/laptop-mockup_20144-41.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 1,
      },
      {
        id: 6,
        name: 'macbook',
        price: 3000,
        quantity: 0,
        imgURL: "https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 1,
      },
      {
        id: 7,
        name: 'tablet pro Mockup',
        price: 1500,
        quantity: 3,
        imgURL: "https://img.freepik.com/free-psd/tablet-pro-psd-mockup_165789-446.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 2,
      },
      {
        id: 8,
        name: 'tablet pro Mockup 11',
        price: 3000,
        quantity: 0,
        imgURL: "https://img.freepik.com/premium-psd/tablet-pro-psd-mockup_165789-457.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 2,
      },
      {
        id: 9,
        name: 'tablet pro Mockup 11',
        price: 3000,
        quantity: 0,
        imgURL: "https://img.freepik.com/free-psd/tablet-pro-mockup_165789-435.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 2,
      },
      {
        id: 10,
        name: 'oppo',
        price: 900,
        quantity: 16,
        imgURL: "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 3,
      },
      {
        id: 11,
        name: 'tablet pro Mockup 11',
        price: 3000,
        quantity: 5,
        imgURL: "https://img.freepik.com/free-psd/tablet-pro-mockup_165789-435.jpg?size=626&ext=jpg&ga=GA1.2.1264324647.1660309253",
        categoryID: 2,
      },
    ]


  }
  ngOnChanges() {
    // this.filtering= this.ProductsServ.getProductsByCategory(this.selectedCategory)

    this.productDBServ.getProdByCategory(this.selectedCategory).subscribe(prds=> this.filtering= prds)
    if(this.selectedCategory == 4) {
      this.productDBServ.getAllProd().subscribe(prds=> this.filtering = prds) 
    }
  }

  ngOnInit(): void {
    // this.filtering= this.ProductsServ.getProducts()
    this.productDBServ.getAllProd().subscribe(prds=> this.filtering = prds)


  }

  addToCart(productPrice: number, qty: string, id: number,item: Products) {
   // this.getProductTotalPrice(productPrice, qty, id)
    // // this.selectedProducts.push({})
    // const myobjs = {
    //   productID: item.id, 
    //   productName:item.name,
    //   unitPrice: item.price,
    //    selectedQuantity: +qty, 
    //   imgURL: item.imgURL,
    // }
    this.AddProduct.emit(item)
    console.log(item)
    // this.productsListSelected.emit(item)

  } 

  buy(prodPrice: number, count: string){
    this.totalPrice+= prodPrice * +count; // 500
    this.totalPriceChanged.emit(this.totalPrice)
}


  getProductTotalPrice(productPrice: number, qty: string, id: number) {
    this.totalPrice = 0
    this.productsList.map(item => {
      if (id === item.id) {
        (item.quantity) ? item.quantity = item.quantity - +qty : item
        //    this.totalPrice += item.price * + item.quantity
      }
    })
    return this.totalPrice += productPrice * +qty
  }
 

onSelect(item:Products){
  return this.productDBServ.onSelect(item)
}

}

