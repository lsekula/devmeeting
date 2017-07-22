import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './app.product.component';
import { TagsComponent } from './app.tags.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, TagsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
