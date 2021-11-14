import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from 'src/app/services/products.service';

import { SwiperOptions } from 'swiper';


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

  config: SwiperOptions = {
    slidesPerView: 4,        
    allowTouchMove: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },    
    loop: false
  };

  
}
