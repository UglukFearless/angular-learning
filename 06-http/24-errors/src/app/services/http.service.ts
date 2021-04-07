import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/User';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get('/no_exist/users.json').pipe(
            map(data => {
                const userList = data['userList'];

                return userList.map((user: any) => {
                    return {
                        name: user.userName,
                        age: user.userAge,
                    };
                });
            }),
            catchError(err => {
                console.log(err);
                return throwError(err);
            })
        );
    }
}