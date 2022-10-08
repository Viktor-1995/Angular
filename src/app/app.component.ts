import { Component,OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { Observable, tap} from 'rxjs'
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Exchange';
  products$: Observable<IProduct[]>;
  loading = false;
  term = '';
  numberFrom : number = 0;
  numberTo: number = 0;
  coefTo: number;
  coefFrom:  number;
  rateUSD : number = 0;
  rateEUR : number = 0;

  StaticUsdEur(product:IProduct){
    console.log(product.cc)
  }

  ChangeNumberFrom(e:any){
    this.numberFrom = e.target.value
    this.numberTo = this.numberFrom*this.coefFrom/this.coefTo
  }
  ChangeNumberTo(e:any){
    this.numberTo = e.target.value
    this.numberFrom = this.numberTo*this.coefTo/this.coefFrom
  }
  ChangeCurrencyFrom(e:any){
    console.log(e.target.value)
    this.coefFrom = e.target.value
    this.numberTo = this.numberFrom*this.coefFrom/this.coefTo
    console.log(this.coefFrom, this.coefTo ,this.numberFrom)
  }
  ChangeCurrencyTo(e:any){
    this.coefTo = e.target.value
    this.numberFrom = this.numberTo*this.coefTo/this.coefFrom
  }

  constructor(private productService: ProductsService){
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(() => this.loading = false)
    )

  }
}
