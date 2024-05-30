import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <app-toolbar [isLoginBtnShown]="false" [isRegisterBtnShown]="true" [isLogoutBtnShown]="false"></app-toolbar>
    <div class="login-container">
      <h2>Se connecter</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" required />
          <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" class="error-message">
            L'email est requis et doit être valide.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input id="password" type="password" formControlName="password" required />
          <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" class="error-message">
            Le mot de passe est requis.
          </div>
        </div>
        <button type="submit" class="login-btn" [routerLink]="['/todos']" [disabled]="loginForm.invalid">Se connecter</button>
      </form>
      <a routerLink="/register" class="register-link">Pas encore inscrit ? Créez un compte</a>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .login-container h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: #555;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    .form-group .error-message {
      color: #e74c3c;
      margin-top: 5px;
      font-size: 0.875rem;
    }

    .login-btn {
      width: 100%;
      padding: 10px;
      background-color: #3498db;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .login-btn:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    .login-btn:hover:not(:disabled) {
      background-color: #2980b9;
    }

    .register-link {
      display: block;
      margin-top: 15px;
      text-align: center;
      color: #3498db;
      text-decoration: none;
      font-size: 0.875rem;
    }

    .register-link:hover {
      text-decoration: underline;
    }
  `]
})
export default class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log('Form Submitted', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
