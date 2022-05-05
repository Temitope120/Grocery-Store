// import { DisplayCart } from './../displayCart';
import { Component, OnInit } from '@angular/core';
// import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displaySearchbar = false;
  displayShoppingCart = false;
  displayLogin = false

  toggleSearch(){
    this.displaySearchbar = !this.displaySearchbar
  }
  toggleCart() {
    this.displayShoppingCart = !this.displayShoppingCart;
  }

  login(){
    this.displayLogin = !this.displayLogin;
  }


  // private displayShoppingCart = DisplayCart
  constructor() { }

  ngOnInit(): void {
    this.displaySearchbar = false;
    this.displaySearchbar = false;
    this.displayLogin = false
  }

}
