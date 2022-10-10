import { Injectable, Input } from '@angular/core';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productsList: Products[]


  constructor() { 


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


  getProducts(){
    return this.productsList
  }

  getProductsByCategory(id:number){
    
    return  this.productsList.filter(prod => prod.categoryID == id || id == 4)
  }

  getProductsById(productId: number): any{
   let matchProduct= this.productsList.find(product => product.id == productId)
    return matchProduct
  }

  getProductsIds():number[]{
    let productsId: number[] = this.productsList.map(product => product.id)
    return productsId
  }

}
