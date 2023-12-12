import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  template: `
    <p>
      product-card works!
    </p>
    <h2> {{title}}</h2>
    <img src= {{imageUrl}} width="100"/>
    <p>{{description}}</p>
    <p>{{price}} euros</p>
    <p>
      <b>{{likes}}❤️</b>
      <button (click)="onAddLike()">Like</button>
    </p>
  `,
  styles: ``
})
export class ProductCardComponent implements OnInit {
  title: string = "";
  description: string = "";
  imageUrl: string = "";
  price: number = 0;
  likes: number = 0;
  hasLiked: boolean = false;
  constructor(){}
 ngOnInit() {
    this.title= "Peluche Harry Potter",
    this.description= "Peluche en coton bio issue du commerce équitable, taille 12cm",
    this.imageUrl = "https://www.king-jouet.com/fstrz/r/s/images.king-jouet.com/6/gu891349_6.jpg?frz-v=3136"
    this.price = 23
    
 }

 onAddLike() {
     this.likes += this.hasLiked ? -1 : 1;
     this.hasLiked = !this.hasLiked;
 }
 }




