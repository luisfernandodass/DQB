import { Component } from '@angular/core';
import { QuotationBook } from 'src/app/models/quotation-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-sell';

  source: QuotationBook[] = [
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
    { high: '00:00', low: '00:00', ask: '00:00', varBid: '00:00', pctChange: '00:00' },
   ];
  displayedColumns: string[] = ['high', 'low', 'ask', 'varBid', 'pctChange'];
}
