import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <nav>
            <nav>
                <a routerLink="">Главная</a> |
                <a routerLink="/about">О сайте</a> |
                <a routerLink="/item/1/details">Информация о товаре</a> |
                <a routerLink="/item/1/stat">Статистика товара</a>
            </nav>
        </nav>
        <h2>Маршрутизация в Angular</h2>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent { }