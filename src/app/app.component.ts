import { Component } from '@angular/core';
import { ProductService } from "app/product.service";
import { BookService } from "app/book.service";

@Component({
  selector: 'app-root',
  template: `
  <bs-jumbotron>
    <div class="heading">Koty i inne Mamroty:)</div>
    <div class="body">Wszystko o kotach i ich gupim stylu bycia.</div>
    <div class="button">Kup Kota</div>
  </bs-jumbotron>
  <user-form></user-form>
  <login></login>
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
   <rating [rating-value]="4"></rating>
  
  `,
  providers:[
    ProductService,
    BookService
    ]
  
})
export class AppComponent {

  imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwiKw9xPE6ZTl490JW-wqvQZD5shpSraY8CLCs5-8VEMK7sO1H"
  isActive=true;
  onClick($event){
    this.isActive= !this.isActive;
    console.log("clicked");
 var typedText =""; 
  }
}
