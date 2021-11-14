import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

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
  productSize!: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
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

  addCart() {
     if(this.productSize === undefined) {
      alert('Você deve selecionar um tamanho')
    }else {
      this.cartService.addProductCart({
        name: this.product.name,        
        price: this.product.price,       
        size: this.productSize,
        image: this.product.image,
        quantity: 1
      })
      alert('Produto adicionado!')      
      this.productSize = undefined;
    }
  }

}
