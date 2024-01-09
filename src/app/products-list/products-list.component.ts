import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { Product } from '../models/product.models';
import { FilterByName } from '../pipes/filter-by-name.pipe';
import { SortByDate } from '../pipes/product.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    MatSlideToggleModule,
    RouterOutlet,
    CommonModule,
    SortByDate,
    FilterByName,
    CommonModule,
    FormsModule,
    
  ],
  template: `
    <p>
      products-list works!
    </p>
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
  `,
  styles: ``
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  title = 'ProjetAngular Harry Potter store';
  sortOrder: string = 'asc';
  sortBy: string = 'name';
  filteredProducts: Product[] = [];
  search: string = "";

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products
    this.search = ""
   
  }
  updateSortOrder(order: string) {
    this.sortOrder = order;
   
  }
   
}
