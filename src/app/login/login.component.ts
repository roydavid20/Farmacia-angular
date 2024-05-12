import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Login method called');
    this.router.navigate(['/proveedores']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
