import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { CartItem } from '../models/cartItem.models';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  template: `
    <p>
     Mon panier
    </p>
    <app-product-card *ngFor="let cartItem of cartItems"  [myProduct]="cartItem.product"></app-product-card>
  `,
  styles: ``
})
export class CartComponent implements OnInit{
  cartItems!:CartItem[];

  ngOnInit(): void {
    let cart = localStorage.getItem("cart");
   let cartArray=[]
   if(cart){
    cartArray=JSON.parse(cart);
   }
   this.cartItems=cartArray
   console.log(this.cartItems)
  }
}

