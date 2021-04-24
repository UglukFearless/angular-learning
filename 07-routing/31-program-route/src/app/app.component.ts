import { Component } from '@angular/core';
import { Router } from '@angular/router';
    
@Component({
    selector: 'my-app',
    styles:[` 
        .navigation { clear: both; }
        a { float: left; }
        .active a { color: red; }
    `],
    template: `
    <div>
        <nav>
            <ul class="navigation">
                <button (click)="goTo('home')">На глагне</button>
                <button (click)="goTo('about')">О сайте</button>
                <button (click)="goTo('item', 1, { queryParams: { 'product': 'phone', 'price': '199 $'} })">Модель 1</button>
                <button (click)="goTo('item', 2, { queryParams: { 'product': 'tablet', 'price': '399 $'} })">Модель 2</button>
            </ul>
        </nav>
        <h2>Маршрутизация в Angular</h2>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {

    constructor(private route: Router) {}

    goTo(nav: string, id?: number, query?: any) {
        switch (nav) {
            case 'home':
                this.route.navigate(['']);
                break;
            case 'about':
                this.route.navigate(['/about']);
                break;
            case 'item':
                this.route.navigate(['/item', id], query);
                break;
            default:
                this.route.navigate(['']);
        }
        
    }
}