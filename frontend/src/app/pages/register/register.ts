import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  confirmPassword: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  sucessMessage: string = '';

  constructor(private userService: UserService, private router: Router){}

  onSubmit(){
    if(this.password !== this.confirmPassword){
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.register(data).subscribe({
      next: (res) => {
        this.sucessMessage = 'Cadastro realizado com sucesso!';
        this.errorMessage = '';
        this.router.navigate(['/login']);
      }
    });
  }
}

