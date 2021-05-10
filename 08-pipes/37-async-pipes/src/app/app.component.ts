import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Асинхронные Pipes</h2>
        <ul>
            <li *ngFor="let user of users | async">
                <p>Имя: {{ user.name }}</p>
                <p>Возраст: {{ user.age }}</p>
            </li>
        </ul>
    </div>`,
    providers: [ HttpService ],
})
export class AppComponent implements OnInit {
    users: Observable<object>;
    constructor(private httpService: HttpService) {}
    ngOnInit(): void {
        this.users = this.httpService.getUsers();
    }
}