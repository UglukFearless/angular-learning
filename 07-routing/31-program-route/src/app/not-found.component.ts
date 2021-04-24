import { Component } from '@angular/core';

@Component({
    selector: 'not-found-app',
    template: `
        <h3>404 Страница не найдена</h3>
        <a routerLink="">На главную</a>
        `,
})
export class NotFoundComponent {};