import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/services/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
