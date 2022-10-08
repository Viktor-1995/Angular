import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error$ = new Subject();
  
  handler(message: string){
    this.error$.next(message)
  }
  clear(){
    this.error$.next('')
  }
}
