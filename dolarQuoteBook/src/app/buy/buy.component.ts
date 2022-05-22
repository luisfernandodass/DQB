import { Component, OnInit } from '@angular/core';
import { QuotationBook } from '../models/quotation-book';

import { webSocket } from 'rxjs/webSocket';
import { DolarQuotationService } from '../services/dolar-quotation.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor(private dolarQuotation: DolarQuotationService) { }

  ngOnInit(): void {
    console.log(this.dolarQuotation.get())
  }



  source: QuotationBook[] = [
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
   ];
  displayedColumns: string[] = ['high', 'low', 'ask', 'varBid', 'pctChange'];
}
