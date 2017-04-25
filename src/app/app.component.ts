import { Component } from '@angular/core';
import { ProductService } from "app/products.service";
import { BookService } from "app/book.service";

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <products></products>
  <books></books>
  `,
  providers:[
    ProductService,
    BookService
    ]
  
})
export class AppComponent {
  title = 'Moja apka';
}
