import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorMessagePipe } from '../../pipe/error-message.pipe';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ErrorMessagePipe],
  template: `
    <div class="error-container">
      <h1>Erreur</h1>
      <p>{{ '404' | errorMessage }}</p>
      <a routerLink="/home">Retour à l'accueil</a>
    </div>
  `,
  styles: [`
    .error-container {
      text-align: center;
      padding: 20px;
    }
    .error-container h1 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .error-container p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    .error-container a {
      font-size: 1rem;
      color: #3498db;
      text-decoration: none;
    }
    .error-container a:hover {
      text-decoration: underline;
    }
  `]
})
export class ErrorPageComponent {}
