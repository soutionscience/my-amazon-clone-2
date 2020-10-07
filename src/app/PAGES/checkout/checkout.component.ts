import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shopping_cart_items:any [];

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getItem()
  } 
  getItem(){
    this.shopping_cart_items =this.shopping_cart.getProducts()
    

  }

}
