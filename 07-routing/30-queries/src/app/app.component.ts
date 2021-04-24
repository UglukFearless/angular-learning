import { Component } from '@angular/core';
    
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
                <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact:true }">
                    <a routerLink="">Главная</a>
                </li>
                <li routerLinkActive="active">
                    <a routerLink="/about">О сайте</a>
                </li>
                <li routerLinkActive="active">
                    <a [routerLink]="['item', 1]" [queryParams]="{ 'product': 'phone', 'price': '199 $'}">Item 1</a>
                </li>
                <li routerLinkActive="active">
                    <a [routerLink]="['item', 2]" [queryParams]="{ 'product': 'tablet', 'price': '399 $'}">Item 2</a>
                </li>
            </ul>
        </nav>
        <h2>Маршрутизация в Angular</h2>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {}