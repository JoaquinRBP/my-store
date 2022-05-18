import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Auth } from './../models/Auth';
import { User } from './../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`;

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, {username, password});
  }
/*
  getProfile(token: string) {
    // const headers = new HttpHeaders();
    // headers.set('Authorization',  `Bearer ${token}`);
    return this.http.get<User>(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-type': 'application/json'
      }
    });
  }*/
/*
  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(rta => this.getProfile(rta.access_token)),
    )
  }*/
}
