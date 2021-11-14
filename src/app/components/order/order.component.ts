import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartItems!: any;
  user: any = this.authService.getUserAuth();
  total: any = this.cartService.getTotalPrice();
  invoiceDate: any = new Date();
  invoiceNo: any = Math.floor(Math.random()*10000);

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartService.clearCart();    
  }

  getTotalPrice() {

  }

}
