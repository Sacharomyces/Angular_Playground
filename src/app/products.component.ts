

import { Component } from "@angular/core";
import {ProductService} from "./product.service"

@Component({
    selector: "products",
    template:`
    <h2>Kotki</h2>
    <div *ngIf="products.length >0">
        <div *ngFor= "let product of products">
            <product [data]="product"></product>
        </div>
    </div>
    <div *ngIf="products.length == 0">
        <h3>Nie ma kotków</h3>
    </div>
    `,
    providers: [ProductService]
})

export class ProductsComponent{
    products=[];

    constructor(productService: ProductService){
        this.products=productService.getProducts();
    }
}