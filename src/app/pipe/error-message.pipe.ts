import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage',
  standalone: true
})
export class ErrorMessagePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case '404':
        return 'Page non trouvée.';
      case '500':
        return 'Erreur interne du serveur.';
      default:
        return 'Une erreur inconnue est survenue.';
    }
  }
}
