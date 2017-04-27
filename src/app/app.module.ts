import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from "app/products.component";
import { BookComponent } from "app/books.component";
import { RatingComponent } from "app/rating.component";
import { ProductComponent } from "app/product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BookComponent,
    RatingComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
