import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    this.authService.register(this.user).subscribe({
      next: (response) => {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert('Error en el registro: ' + error.message);
      }
    });
  }
}
