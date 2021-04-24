import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'item-info',
    template: '<h3>Model {{ id }}</h3>',
})
export class ItemComponent {

    id: number;
    subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {
        this.subscription = activatedRoute.params.subscribe( params => {
            this.id = params['id'];
        });
    }
}