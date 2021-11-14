import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {   
  public product!: any;
  subscription!: Subscription;
  id: number = 0;
  sizes: Array<string> = ['P', 'M', 'G', 'GG'];
  productSize!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    
   }

  async ngOnInit() {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params['id'];    
    });

    this.product = await this.productsService.getProduct(this.id);    
  }

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
