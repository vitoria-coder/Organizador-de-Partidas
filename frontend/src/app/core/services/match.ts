import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class MatchService {
  private apiUrl = 'http://localhost:3000/matches';

  constructor(private http: HttpClient) {}

  getAll(): Observable <any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  create(match: {title: string; date: string; location: string;}): Observable<any>{
    return this.http.post(this.apiUrl, match);
  }
  getById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  update(id: number, match: {title: string; date: string; location: string;}): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, match);
  }
  delete(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
