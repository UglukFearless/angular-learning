import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav>
            <nav>
                <a routerLink="">Главная</a> |
                <a routerLink="/about">О сайте</a> |
            </nav>
        </nav>
        <h2>Маршрутизация в Angular</h2>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent { }