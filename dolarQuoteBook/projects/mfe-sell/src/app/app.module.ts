import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: []
})
export class AppModule { 
  constructor(private injector: Injector){
    const element = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('mfe-sell', element)
  }
 }
