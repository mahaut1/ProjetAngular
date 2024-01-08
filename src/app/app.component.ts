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
import { FilterByName } from './pipes/filter-by-name.pipe';

registerLocaleData(localeFr)
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="header">
         <h1>Welcome to {{title}}!</h1>
<button (click)="updateSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')">
  Sort {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
</button>
<div>
  Chercher : <input type="text" id="search" name="search" [(ngModel)]="search"/>
</div>
<div>La recherche: {{search}}</div> 
    </div>
<div class="Cards">
  <div *ngIf="sortOrder === 'asc'">
  <app-product-card *ngFor="let product of (products | filterByName:search | sortByDate: sortOrder)" [myProduct]="product"></app-product-card>
</div>
<div *ngIf="sortOrder === 'desc'">
  <app-product-card *ngFor="let product of (products |filterByName:search | sortByDate: sortOrder)" [myProduct]="product"></app-product-card>
</div>
    <mat-slide-toggle min="1" max="100" step="1" value="50"></mat-slide-toggle>
    <router-outlet></router-outlet>
</div>

    <footer>
      <p>&copy;  MonSite - Tous droits réservés</p>
    </footer>
  `,
    styles: [
     
    ],
    imports: [
      CommonModule, 
      RouterOutlet, 
      ProductCardComponent,
      MatSlideToggleModule,
      SortByDate,
      FormsModule,
      FilterByName,
     ],  
    providers:[{
      provide: LOCALE_ID,
      useValue:"fr-FR",    
    }],
    
})

export class AppComponent implements OnInit {
  products!: Product[];
  title = 'ProjetAngular Harry Potter store';
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
