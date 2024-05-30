import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  template: `
    <nav class="toolbar">
      <a class="app-title" routerLink="/">TodoApp'Z</a>
      <div><button class="toolbar-btn" routerLink="/login" *ngIf="isLoginBtnShown">Se connecter</button>

      
      <button class="toolbar-btn" routerLink="/register" *ngIf="isRegisterBtnShown">S'inscrire </button>
      
      
      <button class="toolbar-btn" routerLink="/login" *ngIf="isLogoutBtnShown">Se déconnecter</button>
      </div>   
    </nav>
  `,
  styles: [`
   .toolbar {
  background-color: #2c3e50; /* Couleur de fond sombre et élégante */
  padding: 10px 20px; /* Espacement intérieur avec plus de marge sur les côtés */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Légère ombre pour la profondeur */
}

.toolbar a.app-title {
  color: #ecf0f1; /* Couleur de texte claire pour le titre */
  text-decoration: none;
  font-size: 1.5rem; /* Taille de police légèrement plus grande */
  font-weight: bold; /* Titre en gras */
}

.toolbar .toolbar-btn {
  background-color: #3498db; /* Couleur de fond bleu moderne */
  color: #ecf0f1; /* Couleur de texte claire */
  border: none;
  padding: 10px 20px; /* Espacement intérieur plus grand pour les boutons */
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem; /* Taille de police standard */
  transition: background-color 0.3s, transform 0.3s; /* Transitions douces pour la couleur et la transformation */
  margin-right : 10px;
}

.toolbar .toolbar-btn:hover {
  background-color: #2980b9; /* Couleur de fond légèrement plus foncée au survol */
  transform: scale(1.05); /* Légère augmentation de la taille au survol */
}

.toolbar .toolbar-btn:last-child {
  margin-left: auto; /* Place le dernier bouton tout à droite */
  margin-right:0;
}
  `]
})
export class ToolbarComponent {
  @Input() isLoginBtnShown!: boolean;
  @Input() isRegisterBtnShown!: boolean;
  @Input() isLogoutBtnShown!: boolean;
}

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
