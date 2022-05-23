import { Component, OnInit } from '@angular/core';
import { QuotationBook } from '../models/quotation-book';

import { DolarQuotationService } from '../services/dolar-quotation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  bid: string | undefined;
  code: string | undefined;
  codein: string | undefined;
  createDate: string | undefined;
  high: string | undefined;
  low: string | undefined;
  name: string | undefined;
  pctChange: string | undefined;
  timestamp: string | undefined;
  varBid: string | undefined;

  constructor(private dolarQuotationService: DolarQuotationService) { }
  
  ngOnInit(): void {
     this.getBid();
     this.getHigh();
     this.getDate();
     this.getVar();
  }

  getBid(){
    this.dolarQuotationService.get().subscribe((x) => (this.bid = x.USDBRL.bid));  
  }

  getHigh(){
    this.dolarQuotationService.get().subscribe((x) => (this.high = x.USDBRL.high));  
  }

  getLow(){
    this.dolarQuotationService.get().subscribe((x) => (this.low = x.USDBRL.low));  
  }

  getDate(){
    this.dolarQuotationService.get().subscribe((x) => (this.createDate = x.USDBRL.create_date));  
  }

  getVar(){
    this.dolarQuotationService.get().subscribe((x) => (this.varBid = x.USDBRL.varBid));  
  }

  
  // this.dishservice
  //     .getDishIds()
  //     .subscribe((dishIds) => (this.dishIds = dishIds));
  //   this.route.params
  //     .pipe(
  //       switchMap((params: Params) => this.dishservice.getDish(params["id"]))
  //     )
  //     .subscribe((dish) => {
  //       this.dish = dish;
  //       this.setPrevNext(dish.id);
  //     });
}
