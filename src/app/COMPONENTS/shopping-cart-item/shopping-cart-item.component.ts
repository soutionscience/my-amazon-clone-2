import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() checkout_products: any
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(private shoppingCart: ShoppingCartService) { 
    
  }

  ngOnInit(): void {
    console.log("child ", this.checkout_products)
  }
  removeItem(p){
    this.shoppingCart.delete(p);
    this.deleteEvent.emit(p)
  }

}
