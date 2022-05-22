import { Component, OnInit } from '@angular/core';
import { QuotationBook } from '../models/quotation-book';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  source: QuotationBook[] = [
    { high: '00:00', low: '00:00', bid: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', bid: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', bid: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', bid: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', bid: '00:00', varBid: '00:00', pctChange: '00:00' },
   ];
  displayedColumns: string[] = ['high', 'low', 'bid', 'varBid', 'pctChange'];

}
