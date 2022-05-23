import { Component, OnInit } from '@angular/core';
import { QuotationBook } from '../models/quotation-book';
import { DolarQuotationService } from '../services/dolar-quotation.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  ask: string | undefined;
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
     this.getAsk();
     this.getHigh();
     this.getDate();
     this.getVar();
  }

  getAsk(){
    this.dolarQuotationService.get().subscribe((x) => (this.ask = x.USDBRL.ask));  
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

}
