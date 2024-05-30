import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from '../shared/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ToolbarModule],
  template: `
    <app-toolbar [isLoginBtnShown]="true" [isRegisterBtnShown]="true" [isLogoutBtnShown]="false"></app-toolbar>
    <div class="home-content">
      <h1>Bienvenue sur TodoAppZ</h1>
      <p>Cette application est conçue pour vous aider à gérer vos tâches quotidiennes de manière efficace.</p>
      <p>Vous pouvez vous connecter ou vous inscrire pour commencer à utiliser l'application.</p>
    </div>
  `,
  styles: [`
    .home-content {
      text-align: center;
      padding: 20px;
    }
  `]
})
export default class HomeComponent {}
