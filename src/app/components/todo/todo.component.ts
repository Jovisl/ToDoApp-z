import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToolbarModule } from '../shared/toolbar.component';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editable: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToolbarModule],
  template: `
    <app-toolbar [isLogoutBtnShown]="true"></app-toolbar>
    <div class="todo-container">
      <h2>Mes Tâches</h2>
      <form [formGroup]="todoForm" (ngSubmit)="addTodo()">
        <input type="text" formControlName="title" placeholder="Nouvelle tâche" />
        <button type="submit" [disabled]="todoForm.invalid">Ajouter</button>
      </form>
      <ul class="todo-list">
        <li *ngFor="let todo of todos" [class.completed]="todo.completed">
          <span *ngIf="!todo.editable">{{ todo.title }}</span>
          <input *ngIf="todo.editable" [(ngModel)]="todo.title" />
          <button *ngIf="!todo.completed && !todo.editable" (click)="markAsCompleted(todo)">Valider</button>
          <button *ngIf="todo.completed && !todo.editable" (click)="unmarkAsCompleted(todo)">Annuler</button>
          <button *ngIf="!todo.editable" (click)="toggleEditable(todo)">Modifier</button>
          <button *ngIf="todo.editable" (click)="saveChanges(todo)">Enregistrer</button>
          <button (click)="deleteTodo(todo.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .todo-container {
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .todo-container h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    form {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    form input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    form button {
      margin-left: 10px;
      padding: 10px;
      background-color: #3498db;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    form button:disabled {
      background-color: #95a5a6;
      cursor: not-allowed;
    }

    .todo-list {
      list-style: none;
      padding: 0;
    }

    .todo-list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .todo-list li.completed span {
      text-decoration: line-through;
      color: #aaa;
    }

    .todo-list li button {
      margin-left: 10px;
      padding: 5px 10px;
      background-color: #e74c3c;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .todo-list li button:hover {
      background-color: #c0392b;
    }

    .todo-list li input[type="text"] {
      flex: 1;
      margin-right: 10px;
    }

    .todo-list li button:nth-child(3) {
      background-color: #2ecc71;
    }

    .todo-list li button:nth-child(3):hover {
      background-color: #27ae60;
    }

    .todo-list li button:nth-child(4):disabled {
      background-color: #95a5a6;
    }

    .todo-list li button:nth-child(4) {
      background-color: #3498db;
    }

    .todo-list li button:nth-child(4):hover {
      background-color: #2980b9;
    }

    .todo-list li button:nth-child(5) {
      background-color: #e74c3c;
    }

    .todo-list li button:nth-child(5):hover {
      background-color: #c0392b;
    }
  `]
})
export default class TodoComponent {
  todoForm: FormGroup;
  todos: Todo[] = [];
  nextId = 1;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      this.todos.push({
        id: this.nextId++,
        title: this.todoForm.value.title,
        completed: false,
        editable: false
      });
      this.todoForm.reset();
    }
  }

  markAsCompleted(todo: Todo) {
    todo.completed = true;
  }

  unmarkAsCompleted(todo: Todo) {
    todo.completed = false;
  }

  toggleEditable(todo: Todo) {
    todo.editable = true;
  }

  saveChanges(todo: Todo) {
    todo.editable = false;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}