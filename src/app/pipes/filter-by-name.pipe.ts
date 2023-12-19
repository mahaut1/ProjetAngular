import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.models';

@Pipe({
  name: 'filterByName', standalone:true
})
export class FilterByName implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    if (!searchText || searchText.trim() === '') {
      return products; 
    }

    searchText = searchText.toLowerCase().trim();

    return products.filter(product =>
      product.title.toLowerCase().includes(searchText)
    );
  }
}

