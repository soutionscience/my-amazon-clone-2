import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/SERVICES/auth.service';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, 
    public auth: AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logOut()
  }

}
