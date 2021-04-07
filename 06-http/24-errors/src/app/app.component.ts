import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { User } from './model/User';
    
@Component({
    selector: 'my-app',
    template: `
    <p class="col-4">{{error}}</p>
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

    users: User[] = [];
    error: any;

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.httpService.getUsers().subscribe(
            (data) => {
                this.users = data
            },
            (error) => {
                this.error = error.message;
                console.log(error);
            }
        );
    }
}