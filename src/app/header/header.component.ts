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
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-header',
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
    ProductsListComponent
  ],
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
  `,
  styles: ``
})
export class HeaderComponent implements OnInit {
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