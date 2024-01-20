import { Component, Input } from '@angular/core';
import {Product} from '../models/product.models';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgStyle, CommonModule],
  template: `
   <div class="card-component">
      <h2> {{myProduct.title | uppercase}}</h2>
    <img [src]= "myProduct.imageUrl" width="100"/>
    <p>{{myProduct.description}}</p>
    <p *ngIf="myProduct.size">Plusieurs tailles disponibles</p>
    <p>{{myProduct.price | currency:'EUR'}} euros</p>
    <p>{{myProduct.creationDate | date: 'fullDate'}}</p>
    <p>
      <b [ngStyle]="{color: myProduct.likes >0?'green':'red'}">{{myProduct.likes}}❤️</b>
      <button (click)="onAddLike()">Like</button>
    </p>
    <button (click)="addtocard(myProduct)">Add to cart</button>
   </div>
  
  `,
  styles: ``
})
export class ProductCardComponent {
  @Input() myProduct!: Product;



 onAddLike() {
   if(this.myProduct.hasLiked){
    this.myProduct.likes--;
   } else {
    this.myProduct.likes++;
   }
   this.myProduct.hasLiked=!this.myProduct.hasLiked
 }
 addtocard(product: Product) {
  let card = localStorage.getItem("cart");
  if (card) {
    let enC = JSON.parse(card);
    const existingProductIndex = enC.findIndex((item: { id: number; }) => item.id === product.id);
    if (existingProductIndex !== -1) {
      enC[existingProductIndex].quantity += 1;
    } else {
      enC.push({ id: product.id, product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(enC));
  } else {
    let enC = [{ id: product.id, product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(enC));
  }
}
}





