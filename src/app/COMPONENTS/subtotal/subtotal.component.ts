import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.css']
})
export class SubtotalComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
