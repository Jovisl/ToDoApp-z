import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routing.module'; // Import your routes
import { AppComponent } from './app.component';
import  HomeComponent  from './components/home/home.component';
import  LoginComponent  from './components/auth/login.component';
import  RegisterComponent  from './components/auth/register.component';
import  TodoComponent  from './components/todo/todo.component';
import { ErrorPageComponent } from './components/error/error-page.component';
import { ToolbarComponent } from './components/shared/toolbar.component';
import { ErrorMessagePipe } from "./pipe/error-message.pipe";
import { CatPictureComponent } from './cat-picture/cat-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TodoComponent,
    ErrorPageComponent,
    ToolbarComponent,
    CatPictureComponent,
    ErrorMessagePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) 
  ]
})
export class AppModule { }
