import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tsCart: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  openCart() {
    this.tsCart = true;
  }

  onCloseCart(event: any) {
   this.tsCart = event;    
  }
}
