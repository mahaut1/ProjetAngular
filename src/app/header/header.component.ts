import { Component,EventEmitter,Output, OnInit } from '@angular/core';
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
import { RouterLink, RouterLinkActive } from '@angular/router';

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
    ProductsListComponent,
    RouterLink,
    RouterLinkActive
  ],
  template: `
     <div class="header">
  <h1>Welcome to {{ title }}!</h1>
  <nav>
      <ul>
        <li>
          <a routerLink="" routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}"
          >
          Accueil
          </a>
        </li>
        <li>
          <a routerLink="cart" routerLinkActive="active">Panier</a>
        </li>
      </ul>
  </nav>
  <div>
    Chercher : <input type="text" id="search" name="search" [(ngModel)]="search" (input)="onSearchChange()" />
  </div>
  <div>La recherche: {{ search }}</div>
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
  @Output() searchChange = new EventEmitter<string>();
  

  onSearchChange() {
    this.searchChange.emit(this.search.trim().toLowerCase());
    this.filteredProducts = this.productsService.getFilteredProducts(this.search, this.sortOrder);
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products
    this.search = ""
  }
  updateSortOrder(order: string) {
    this.sortOrder = order;
  }
  sortByDate(products: Product[], order: string): Product[] {
    return order === 'asc' ?
      products.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime()) :
      products.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
  }
}
