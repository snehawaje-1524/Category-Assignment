import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = environment.baseURL;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User[]> {
    const url = encodeURI('users?email=' + user.email + '&password=' + user.password);
    return this.http.get<User[]>(this.BASE_URL + url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  register(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = encodeURI('users');
    return this.http.post<User>(this.BASE_URL + url, user, httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
