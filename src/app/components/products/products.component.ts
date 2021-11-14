import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from 'src/app/services/products.service';

import SwiperCore, { Autoplay,Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  
  public products!: Array<any>;
  subscription!: Subscription;
  swiper = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.subscription = this.productsService.getProducts()
    .subscribe(res => {      
      this.products = res;
    })       
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
}
