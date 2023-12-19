import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import {Product} from './models/product.models';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import localeFr from '@angular/common/locales/fr'
import { SortByDate } from './pipes/product.pipe';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeFr)
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Welcome to {{title}}!</h1>
<button (click)="updateSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')">
  Sort {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
</button>
<div>
  Chercher : <input type="text" id="search" name="search" [(ngModel)]="search"/>
</div>
<div>La recherche: {{search}}</div>
<div *ngIf="sortOrder === 'asc'">
  <app-product-card *ngFor="let product of (products | sortByDate: sortOrder)" [myProduct]="product"></app-product-card>
</div>
<div *ngIf="sortOrder === 'desc'">
  <app-product-card *ngFor="let product of (products | sortByDate: sortOrder)" [myProduct]="product"></app-product-card>
</div>
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
      FormsModule
     ],
   

    providers:[{
      provide: LOCALE_ID,
      useValue:"fr-FR",
    }],
    
})

export class AppComponent implements OnInit {
  products!: Product[];
  title = 'ProjetAngular';
  sortOrder: string = 'asc';
  sortBy: string = 'name';
  filteredProducts: Product[] = [];
  search: string="";

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products=this.productsService.products
    this.search=""
}
updateSortOrder(order: string) {
  this.sortOrder = order;
}
}
