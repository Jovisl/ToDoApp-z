import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'login',
        title : 'Login | TodoApp',
        loadComponent: () =>  import('./components/auth/login.component'),
    },
    {
        path : 'register',
        title : 'Register | TodoApp',
        loadComponent: () =>  import('./components/auth/register.component'),
    },
    {
        path : 'todos',
        title : 'todos | TodoApp',
        loadComponent: () =>  import('./components/todo/todo.component'),
    },
    { 
        path:'',
        redirectTo : 'todos',
        pathMatch: 'full',
    },
    { 
        path:'**',
        redirectTo : 'todos',
        pathMatch: 'full',
    }
];
