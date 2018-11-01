import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductService } from './product.service';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
  exports: [ProductsComponent, ProductDetailComponent, ProductSearchComponent],
  declarations: [ProductsComponent, ProductDetailComponent, ProductSearchComponent],
  providers: [ProductService]
})
export class ProductModule { }
