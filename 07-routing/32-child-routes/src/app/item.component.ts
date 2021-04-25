import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'item-info',
    template: `
        <h3>Model {{ id }}</h3>
        <router-outlet></router-outlet>
        `,
})
export class ItemComponent {

    id: number;

    private routeSubscription: Subscription;

    constructor(private route: ActivatedRoute) {

        this.routeSubscription = route.params.subscribe( params => {
            this.id = params['id'];
        });
    }
}