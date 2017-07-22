import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleProduct } from './products/single.component';
import { ListOfProducts } from './products/list.component';

@NgModule({
  declarations: [
    AppComponent, SingleProduct, ListOfProducts
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
