import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ListItemsComponent } from './listItems/lisItems.component';
import { ListItemsPromotedComponent } from './itemListPromoted/itemListPromoted.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListItemsComponent,
    ListItemsPromotedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
