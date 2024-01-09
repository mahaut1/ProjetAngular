import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Product} from './models/product.models';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import localeFr from '@angular/common/locales/fr'
import { SortByDate } from './pipes/product.pipe';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { FilterByName } from './pipes/filter-by-name.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';



registerLocaleData(localeFr)
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-header></app-header>
  <app-products-list></app-products-list>
  <app-footer></app-footer>
    
  `,
  styles: [

  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    SortByDate,
    FormsModule,
    FilterByName,
    ProductsListComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "fr-FR",
  }],

})

export class AppComponent implements OnInit  {
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
