import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  HomeComponent from './components/home/home.component';
import  LoginComponent  from './components/auth/login.component';
import  RegisterComponent from './components/auth/register.component';
import  TodoComponent  from './components/todo/todo.component';
import { ErrorPageComponent } from './components/error/error-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todos', component: TodoComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
