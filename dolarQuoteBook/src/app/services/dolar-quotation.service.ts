import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class DolarQuotationService {

  url = 'https://economia.awesomeapi.com.br/last/USD-BRL';

  constructor() { }


  get(){
    return of(this.url);
  }
  
  // url.subscribe({
  //   next(a) {
  //     console.log(a)
  //   },
  //   error(msg) {
  //     console.log('Error Getting Location: ', msg);
  //   }
  // })
}
