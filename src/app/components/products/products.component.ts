import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import Swiper from 'swiper';

import { ProductsService } from 'src/app/services/products.service';

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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscription = this.productsService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
     },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },      
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  };
}
