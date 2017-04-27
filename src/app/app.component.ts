import { Component } from '@angular/core';
import { ProductService } from "app/products.service";
import { BookService } from "app/book.service";

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <products></products>
  <books></books>
  <img src={{imageUrl}}/>
  <button 
        class="btn btn-primary"
        [class.active]="isActive">Naciśnij</button>
 
  <button 
        class="btn btn-primary"
        [style.backgroundColor]="isActive ? 'blue':'red'">Naciśnij</button>

   <button (click)="onClick($event)">kliknij</button>
   <input type="text" [(ngModel)]="typedText"/>
   Napisałeś:{{typedText}}
  
  `,
  providers:[
    ProductService,
    BookService
    ]
  
})
export class AppComponent {
  title = 'Moja apka';
  imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwiKw9xPE6ZTl490JW-wqvQZD5shpSraY8CLCs5-8VEMK7sO1H"
  isActive=true;
  onClick($event){
    this.isActive= !this.isActive;
    console.log("clicked");
 var typedText =""; 
  }
}
