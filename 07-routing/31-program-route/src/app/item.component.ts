import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'item-info',
    template: `
        <h3>Model {{ id }}</h3>
        <div>Product: {{ product }}</div>
        <div>Price: {{ price }}</div>
        `,
})
export class ItemComponent {

    id: number;
    product: string;
    price: string;

    private routeSubscription: Subscription;
    private querySubscription: Subscription;

    constructor(private route: ActivatedRoute) {

        this.routeSubscription = route.params.subscribe( params => {
            this.id = params['id'];
        });

        this.querySubscription = route.queryParams.subscribe( queryParams => {
            this.product = queryParams['product'];
            this.price = queryParams['price'];
        })
    }
}