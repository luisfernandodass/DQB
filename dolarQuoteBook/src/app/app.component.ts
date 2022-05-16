import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dolar Quote Book';

  ngOnInit() {
    const scriptMfeBuy = document.createElement('script');
    scriptMfeBuy.src = 'http://localhost:8080/mfe-buy/main.js';
    document.body.appendChild(scriptMfeBuy);

    const scriptMfeSell = document.createElement('script');
    scriptMfeSell.src = 'http://localhost:8080/mfe-sell/main.js';
    document.body.appendChild(scriptMfeSell);
  }
}
