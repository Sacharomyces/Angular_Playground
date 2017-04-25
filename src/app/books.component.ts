

import { Component } from "@angular/core/";
import { BookService } from "app/book.service";

@Component({
    selector:'books',
    template:`
    <h2>Books</h2>
    <ul>
        <li *ngFor="let book of books">{{book}}</li>
    </ul>
    `
})


export class BookComponent{
    books;

    constructor(bookService: BookService){
        this.books=bookService.getBooks();
    }
}