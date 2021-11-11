import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products!: Array<any>;
  subscription!: Subscription;

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

  teste() {
    console.log(this.products);
    
  }

}
