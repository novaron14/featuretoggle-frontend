import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService{
  
  private url : string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/register';
  }

  register(user:user) {
    return this.http.post<user>(this.url, user).subscribe()
  }
}
