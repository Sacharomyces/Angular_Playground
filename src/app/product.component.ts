
import { Component, Input } from "@angular/core";

@Component({
    selector:'product',
    template:`
    <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="{{data.imageUrl}}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{data.productName}}</h4>
            {{data.releasedDate|date|uppercase}}
            <rating
                    [rating-value]="data.rating"
                    [numOfReviews]="data.numOfReviews">
            </rating>
            <div [ngSwitch]="data.rating">
                <div *ngSwitchCase="1">Słaby</div>
                <div *ngSwitchCase="2">Taki sobie</div>
                <div *ngSwitchCase="3">Całkiem całkiem</div>
                <div *ngSwitchCase="4">Słodziak</div>
                <div *ngSwitchCase="5">Supi</div>
            </div>
            <br>
            {{data.description|truncate:20}}
        </div>
    </div>
    `,
    styles:
    [`
        .media {
            margin-bottom:20px;
        }
    `]
})

export class ProductComponent{

@Input() data;
}