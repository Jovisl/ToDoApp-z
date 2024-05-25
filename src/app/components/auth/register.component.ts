import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../shared/toolbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToolbarModule],
  template: `
    <app-toolbar [isLoginBtnShown]="true" [isRegisterBtnShown]="false" [isLogoutBtnShown]="false"></app-toolbar>
    <div class="register-container">
      <h2>S'inscrire</h2>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" required />
          <div *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched" class="error-message">
            L'email est requis et doit être valide.
          </div>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input id="password" type="password" formControlName="password" required />
          <div *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched" class="error-message">
            Le mot de passe est requis.
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmez le mot de passe</label>
          <input id="confirmPassword" type="password" formControlName="confirmPassword" required />
          <div *ngIf="registerForm.get('confirmPassword')?.invalid && registerForm.get('confirmPassword')?.touched" class="error-message">
            La confirmation du mot de passe est requise.
          </div>
          <div *ngIf="passwordsDoNotMatch && registerForm.get('confirmPassword')?.touched" class="error-message">
            Les mots de passe ne correspondent pas.
          </div>
        </div>
        <button type="submit" class="register-btn" [disabled]="registerForm.invalid">S'inscrire</button>
      </form>
      <a routerLink="/login" class="login-link">Déjà inscrit ? Connectez-vous</a>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .register-container h2 {
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

    .register-btn {
      width: 100%;
      padding: 10px;
      background-color: #2ecc71;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .register-btn:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    .register-btn:hover:not(:disabled) {
      background-color: #27ae60;
    }

    .login-link {
      display: block;
      margin-top: 15px;
      text-align: center;
      color: #3498db;
      text-decoration: none;
      font-size: 0.875rem;
    }

    .login-link:hover {
      text-decoration: underline;
    }
  `]
})
export default class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get passwordsDoNotMatch(): boolean {
    return this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value;
  }

  onSubmit() {
    if (this.registerForm.valid && !this.passwordsDoNotMatch) {
      // Handle form submission
      console.log('Form Submitted', this.registerForm.value);
    } else {
      console.log('Form is invalid or passwords do not match');
    }
  }
}
