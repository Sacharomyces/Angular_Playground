import { Component } from '@angular/core';
import { ProductService } from "app/products.service";

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <products></products>
  `,
  providers:[ProductService]
  
})
export class AppComponent {
  title = 'Moja apka';
}
