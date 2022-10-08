import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'staticcurrencyPipe'
})
export class StaticcurrencyPipePipe implements PipeTransform {

  transform(product: IProduct[], currency: string ): IProduct[] {
    return product.filter(p => {
      return p.cc == currency ? p.rate : 0
    })
  }

}
