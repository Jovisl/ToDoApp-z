import { Routes } from '@angular/router';

import { ErrorPageComponent } from './components/error/error-page.component'; // Assurez-vous que le nom du composant est correctement importé

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home | TodoAppZ',
        loadComponent: () => import('./components/home/home.component'), // Utilisez la propriété HomeComponent après l'importation
    },
    {
        path: 'login',
        title: 'Login | TodoAppZ',
        loadComponent: () => import('./components/auth/login.component'), // Utilisez la propriété LoginComponent après l'importation
    },
    {
        path: 'register',
        title: 'Register | TodoAppZ',
        loadComponent: () => import('./components/auth/register.component'), // Utilisez la propriété RegisterComponent après l'importation
    },
    {
        path: 'todos',
        title: 'Todos | TodoAppZ',
        loadComponent: () => import('./components/todo/todo.component') // Utilisez la propriété TodoComponent après l'importation
    },
    {
        path: 'error',
        title: 'Error | TodoAppZ',
        loadComponent: () => import('./components/error/error-page.component').then(m => m.ErrorPageComponent), // Assurez-vous que le nom du composant est correctement utilisé après l'importation
    },
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { 
        path: '**',
        redirectTo: 'error',
        pathMatch: 'full',
    }
];
