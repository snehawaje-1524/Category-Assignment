import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User[]> {
    console.log("login");
    const url = encodeURI('users?email=' + user.email + '&password=' + user.password);
    return this.http.get<User[]>(this.BASE_URL + url);
  }

  register(user: User): Observable<User> {
    console.log("register", user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log("register", httpOptions);
    const url = encodeURI('users');
    return this.http.post<User>(this.BASE_URL + url, user, httpOptions);
  }

}
