import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: user;
  
  private url : string;
  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/api/login';
  }

  login(user:user) {
    return this.http.post(this.url, user, {responseType: "text"}).subscribe((token) => {
      this.user = {
        email: user.email,
        password: user.password,
        token: token
      }
      this.router.navigateByUrl("/main");
    });
  }
}
