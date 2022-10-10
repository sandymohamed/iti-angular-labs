import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "",redirectTo:"/home", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "products", component: SelectBoxComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path:"cart", component: CartComponent, canActivate:[AuthGuard]},
  {path: "product/add",component:AddProductComponent},
  {path: "register", component:RegisterComponent},

  {
      path: 'user', 
      loadChildren : () => import('./components/user-module/user-module.module')
           .then(m => m.UserModuleModule)
    
  }
  ,{path:"**", component: NotFoundComponent}

  
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
