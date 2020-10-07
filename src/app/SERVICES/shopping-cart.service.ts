import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any [] = [];

  constructor() { }
  addProduct = (product)=>{
    let items = this.getProducts();
    if(items){
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items))

    }else{
      this.shopping_cart_items.push(product);
       localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))

    }
 
  }
  getProducts =()=>{
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }
  get_shopping_cart_length(){
    
    return this.getProducts()? this.getProducts().length: 0;
  }
  getTotal(){
    let shopping_cart = this.getProducts();
    return shopping_cart?.reduce((acc, item)=> acc+item.price, 0)
  }
  delete(p){
    let shopping_cart = this.getProducts();
    console.log("deleting ", p)
    const index = shopping_cart.findIndex(item => item.id === p.id);
    console.log("index " ,index)

    if(index >= 0){
     shopping_cart.splice(index, 1);
     console.log('after splice', shopping_cart)
     return localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
    }


  }
}
