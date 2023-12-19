import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import {Product} from './models/product.models';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import localeFr from '@angular/common/locales/fr'
import { SortByDate } from './pipes/product.pipe';
registerLocaleData(localeFr)
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Welcome to {{title}}!</h1>
   
    <app-product-card *ngFor="let product of (products | sortByDate:'asc')" [myProduct]="product"></app-product-card>
    <mat-slide-toggle min="1" max="100" step="1" value="50"></mat-slide-toggle>
    <router-outlet></router-outlet>
    
  `,
    styles: [],
    imports: [
      CommonModule, 
      RouterOutlet, 
      ProductCardComponent,
      MatSlideToggleModule,
      SortByDate,
     ],
   

    providers:[{
      provide: LOCALE_ID,
      useValue:"fr-FR",
    }],
    
})

export class AppComponent implements OnInit{
  products!: Product[];
  title = 'ProjetAngular';
  ngOnInit() {
    this.products = [
      new Product (
          "Peluche Harry Potter",
      " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
      "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
      23,
      new Date('2023/12/17'),
      0,
      false,
      ['XL']
      ), new Product (
        "Peluche Ronald Weasley",
    " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
    "https://media.auchan.fr/7e19f127-18af-4550-a9d7-7fb796cc3df1_1200x1200/B2CD/",
    23,
    new Date('2023/12/19'),
    0,
    false
 
    ), new Product (
      "Peluche Hermione Granger",
  " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
  "https://media.auchan.fr/237b2ba0-a3b6-45b9-94a9-97d753624a12_1200x1200/B2CD/",
  23,
  new Date('2023/12/18'),
  0,
  false,
  ['XL','L']
  )   
   ]
  }
}
