import { Pipe, PipeTransform } from "@angular/core";
import { Product } from '../models/product.models';

@Pipe({name:'sortByDate', standalone:true})
export class SortByDate implements PipeTransform {
  transform(products:Product[], order?:any){
    let desc= !(order && order ==='asc');
    return products.sort((a,b) => {
        if (desc) return b.creationDate.getTime() - a.creationDate.getTime()
        else return a.creationDate.getTime() - b.creationDate.getTime()
    })
  }

}