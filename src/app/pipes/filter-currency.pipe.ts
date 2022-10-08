import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterCurrency'
})
export class FilterCurrencyPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p => {
      return p.cc.includes(search)
    })
  }

}
