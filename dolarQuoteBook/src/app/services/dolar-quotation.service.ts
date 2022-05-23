import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuotationBook } from '../models/quotation-book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarQuotationService {

  constructor(public http: HttpClient) { }

  // get(){ 
  //   return this.http.get<QuotationBook>('https://economia.awesomeapi.com.br/last/USD-BRL')
  //   .subscribe(quotationBook => {
  //     this.x = quotationBook.
  //   })
  // }

  get(): Observable<QuotationBook> {
    return this.http
      .get<QuotationBook>('https://economia.awesomeapi.com.br/last/USD-BRL')
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
