import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  tsCart: boolean = false;
  cartItems: Array<any> = [];
  
  constructor( private cartSerice: CartService ) { }

  ngOnInit(): void {
    this.cartItems = this.cartSerice.getItems();
  }

  openCart() {
    this.tsCart = true;
  }

  onCloseCart(event: any) {
   this.tsCart = event;    
  }

  menuMobile(e: any) {
    this.openMenu = !this.openMenu;
  }
}
