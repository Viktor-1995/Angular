import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpErrorResponse} from "@angular/common/http"
import { IProduct } from "../models/product";
import { catchError, delay, Observable, throwError } from "rxjs"
import { ErrorService } from "./error.service";

@Injectable({
    providedIn:'root'
})
export class ProductsService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ){
    }

    getAll(): Observable<IProduct[]>{
       return this.http.get<IProduct[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',{
        params: new HttpParams({
            fromObject: { limit: 5}
        })
       }).pipe(
        delay(100),
        catchError(this.errorHandler)
        )
       
    }

   private errorHandler(error: HttpErrorResponse){
        this.errorService.handler(error.message)
        return throwError(()=> error.message)
   } 
}