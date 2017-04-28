import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from "app/products.component";
import { BookComponent } from "app/books.component";
import { RatingComponent } from "app/rating.component";
import { ProductComponent } from "app/product.component";
import { TruncatePipe } from "app/truncate.pipe";
import { JumboTronComponent } from "app/jumbotron.component";
import { UserFormComponent } from "app/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BookComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumboTronComponent,
    UserFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
