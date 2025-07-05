import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authService {
  getUserIdFromToken(): number | null { 
    if(typeof window === 'undefined') return null;
    
    const token = localStorage.getItem('token');
    if(!token) return null;

    try{
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.user_id;
    } catch(err){
      console.error('Erro ao decodificar token:', err);
      return null;
    }
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

//VerificaçãoDoUsuárioLogado
  isLoggedIn(): boolean{
    return !!this.getToken();
  }
  constructor() { }
}
