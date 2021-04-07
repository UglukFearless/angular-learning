import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { User } from './model/User';
    
@Component({
    selector: 'my-app',
    template: `
    <div class="col-4">
        <ul>
            <li *ngFor="let user of users">
                <p>Имя пользователя: {{ user?.name }}</p>
                <p>Возраст пользователя: {{ user?.age }}</p>
            </li>
        </ul>
    </div>
    `,
    providers: [HttpService]
})
export class AppComponent {

    users: User[];

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.httpService.getUsers().subscribe((data) => this.users = data);
    }
}