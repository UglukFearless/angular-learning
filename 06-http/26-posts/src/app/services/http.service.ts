import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    postData(user: User) {
        const body = { name: user.name, age: user.age };
        return this.http.post('http://localhost:3000/postuser', body);
    }
}