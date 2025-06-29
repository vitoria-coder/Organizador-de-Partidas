import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private baseUrl = 'http://localhost:3000/confirmations';

  constructor(private http: HttpClient) { }

  confirm(match_id: number, user_name: string): Observable<any>{
    return this.http.post(this.baseUrl, {match_id, user_name});
  }

  getConfirmations(match_id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${match_id}`);
  }
}
