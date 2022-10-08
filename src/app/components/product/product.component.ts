import { Component,Input,OnInit} from "@angular/core"
import { IProduct } from "src/app/models/product"


@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit{
    @Input() product: IProduct

    rateUSD : number = 0;
    rateEUR : number = 0;
    details = false
    ngOnInit(): void {
        this.rateUSD = this.product.cc == 'USD' ? this.product.rate : 0
        this.rateEUR = this.product.cc == 'EUR' ? this.product.rate : 0
      }
}