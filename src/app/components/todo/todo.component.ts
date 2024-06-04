import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editable: boolean;
  dueDate?: Date;
}

@Component({
  selector: 'app-todo',
  template: `
    <app-toolbar 
  [isLoginBtnShown]="false" 
  [isRegisterBtnShown]="false" 
  [isLogoutBtnShown]="true">
</app-toolbar>
    <div class="todo-container">
      <h2>Mes Tâches</h2>
      <form [formGroup]="todoForm" (ngSubmit)="addTodo()">
        <input type="text" formControlName="title" placeholder="Nouvelle tâche" />
        <input type="date" formControlName="dueDate" />
        <input type="time" formControlName="dueTime" />
        <button type="submit" [disabled]="todoForm.invalid">Ajouter</button>
      </form>
      <ul class="todo-list">
        <li *ngFor="let todo of todos" [class.completed]="todo.completed">
          <span *ngIf="!todo.editable">{{ todo.title }} - {{ todo.dueDate | date:'short' }}</span>
          <input *ngIf="todo.editable" [formControl]="editableTitle" />
          <button *ngIf="!todo.completed && !todo.editable" (click)="markAsCompleted(todo)" class="btn-validate">Finito</button>
          <button *ngIf="todo.completed && !todo.editable" (click)="unmarkAsCompleted(todo)" class="btn-unvalidate">Pas finito</button>
          <button *ngIf="!todo.editable" (click)="toggleEditable(todo)" class="btn-edit">Modifier</button>
          <button *ngIf="todo.editable" (click)="saveChanges(todo)" class="btn-save">Enregistrer</button>
          <button (click)="deleteTodo(todo.id)" class="btn-delete">Supprimer</button>
          <app-cat-picture *ngIf="todo.completed"></app-cat-picture>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .todo-container {
      max-width: 800px;
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

    form input[type="text"] {
      flex: 2;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    form input[type="date"], form input[type="time"] {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      margin-left: 10px;
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
      padding: 15px;
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
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .todo-list li input[type="text"] {
      flex: 1;
      margin-right: 10px;
    }

    .btn-validate {
      background-color: #2ecc71;
    }

    .btn-validate:hover {
      background-color: #27ae60;
    }

    .btn-unvalidate {
      background-color: #f39c12;
    }

    .btn-unvalidate:hover {
      background-color: #e67e22;
    }

    .btn-edit {
      background-color: #e67e22;
    }

    .btn-edit:hover {
      background-color: #d35400;
    }

    .btn-save {
      background-color: #3498db;
    }

    .btn-save:hover {
      background-color: #2980b9;
    }

    .btn-delete {
      background-color: #e74c3c;
    }

    .btn-delete:hover {
      background-color: #c0392b;
    }
  `]
})
export default class TodoComponent {
  todoForm: FormGroup;
  todos: Todo[] = [];
  nextId = 1;
  editableTitle: FormControl = new FormControl('');

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      dueTime: ['', Validators.required],
      editableTitle: this.editableTitle
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      const dueDate = new Date(this.todoForm.value.dueDate + 'T' + this.todoForm.value.dueTime);
      this.todos.push({
        id: this.nextId++,
        title: this.todoForm.value.title,
        completed: false,
        editable: false,
        dueDate: dueDate
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
    this.editableTitle.setValue(todo.title);
  }

  saveChanges(todo: Todo) {
    todo.title = this.editableTitle.value;
    todo.editable = false;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
