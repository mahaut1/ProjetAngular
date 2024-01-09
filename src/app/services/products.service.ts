import { Injectable } from "@angular/core";
import { Product } from "../models/product.models";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products : Product[]= [
        new Product (
            "Peluche Harry Potter",
        " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
        "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
        23,
        new Date('2023/12/17'),
        0,
        false,
        ['XL']
        ),  new Product (
        "Peluche Hermione Granger",
    " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
    "https://media.auchan.fr/237b2ba0-a3b6-45b9-94a9-97d753624a12_1200x1200/B2CD/",
    23,
    new Date('2023/12/18'),
    0,
    false,
    ['XL','L']
    ),  new Product (
        "Coupe de Dumbledore",
    " RÉPLIQUE LA COUPE DE DUMBLEDORE DE HARRY POTTER",
    "https://www.fandegoodies.com/gfphotos/NOB7538.jpg",
    23,
    new Date('2024/01/30'),
    0,
    false,
    ['XL','L']
    ),new Product (
        "Peluche Ronald Weasley",
    " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
    "https://media.auchan.fr/7e19f127-18af-4550-a9d7-7fb796cc3df1_1200x1200/B2CD/",
    23,
    new Date('2023/12/19'),
    0,
    false,
    ['XL','L']
 
    ),new Product (
        "Echarpe griffondor",
    " Harry Potter - Echarpe - Ultra Douce Rouge & Jaune",
    "https://static1.funidelia.com/490882-f6_big2/echarpe-harry-potter-gryffondor.jpg",
    23,
    new Date('2024/01/01'),
    0,
    false,
    ['XL','L']
 
    ), new Product (
        "Chaise de bureau",
    " Chaise de bureau Griffondor",
    "https://media.carrefour.fr/medias/586f4421e0b3302ab2dd627be39354e2/p_1500x1500/3701221702106-0.jpg",
    23,
    new Date('2024/01/30'),
    0,
    false,
    ['XL','L']
 
    )
    
    ]
    filterByName(products: Product[], searchText: string): Product[] {
        if (!searchText || searchText.trim() === '') {
          return products;
        }
    
        searchText = searchText.toLowerCase().trim();
    
        return products.filter(product =>
          product.title.toLowerCase().includes(searchText)
        );
      }
    
      sortByDate(products: Product[], order: string): Product[] {
        return order === 'asc' ?
          products.sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime()) :
          products.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
      }
    getItems():Product[]{
        return this.products
    }

    onLikeProduct(product: Product):void {
        if(product.hasLiked) {
            product.likes--;
        } else {
            product.likes++;
        }
        product.hasLiked = !product.hasLiked
    }
    getFilteredProducts(searchText: string, sortOrder: string): Product[] {
        let filteredProducts = this.filterByName(this.products, searchText);
        return this.sortByDate(filteredProducts, sortOrder);
      }
}