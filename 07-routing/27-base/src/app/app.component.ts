import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div> 
        <h2>Маршрутизация в Angular</h2>
        <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {}