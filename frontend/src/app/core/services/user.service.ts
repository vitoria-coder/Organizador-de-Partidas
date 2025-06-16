import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient){}

  login(data: {email: string; password: string}): Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  register(data:{name: string; email: string; password: string}): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
