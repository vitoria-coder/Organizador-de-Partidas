import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  email: string = '';
  password:string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router){}

  onSubmit(){
    const data = { email: this.email, password: this.password};
    this.userService.login(data).subscribe({
      next: (res) => {
        console.log('Login bem-sucedido', res);
        this.errorMessage = '';
        this.router.navigate(['/matches']);
      },
      error: (err) =>{
        console.error('Erro ao logar', err);
        this.errorMessage = err.error.message || 'Falha no login.';
       },

    });

  }
}
