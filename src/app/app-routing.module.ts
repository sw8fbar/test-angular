import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
