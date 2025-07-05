import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient){}
  
  login(credentials: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((res: any) =>{
        localStorage.setItem('token', res.token);
      })
    );
  };
  register(data:{name: string; email: string; password: string}): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
