import { Component,Input, NgModule, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterOutlet } from '@angular/router';
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
    RouterLink
    
  ],
  template: `
    <p>
      products-list works!
    </p>
    <button (click)="updateSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')">
    Sort {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
  </button>
    <div class="Cards">
  <a *ngFor="let product of (products | filterByName:search | sortByDate: sortOrder )" [routerLink]="['product', product.id]">
    <app-product-card [myProduct]="product">
  </app-product-card>
  </a>

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
  @Input() search: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products
    this.search = ""
    console.log('Search changed in ProductsListComponent:', this.search);
    this.filterProducts();
   
  }
  updateSortOrder(order: string) {
    this.sortOrder = order;
    this.filterProducts();
   
  }
  filterProducts() {
    this.filteredProducts = this.productsService.getFilteredProducts(this.search, this.sortOrder);
  }
  
  
   
}
