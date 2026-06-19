import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  constructor(private auth: Auth) {}

  login() {

    const data = {
      username: this.username,
      password: this.password
    };

    this.auth.login(data).subscribe((res: any) => {

      localStorage.setItem('token', res.access);

      console.log('Login correcto');

      alert('Login correcto');

    });

  }

}