import { Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import Todo from './todo.model';

@Component({
  selector: 'content-page',
  template: `
    <h1>To Do Today - {{ date }}</h1>
    <input #newTodo />
    <button
      (click)="addTodo(newTodo.value); newTodo.value=''">Add</button>
    <ul>
      <li
        *ngFor="let todo of todos; let i = index;"
        #todoListItem>
        <span
          *ngIf="!todoListItem.hasAttribute('isEditable')"
          (click)="todoListItem.setAttribute('isEditable', 'true')">
          {{ todo.text }}
        </span>
        <span
          *ngIf="todoListItem.hasAttribute('isEditable')">
          <input
            #todoText
            [value]="todo.text"
            (keyup.enter)="updateTodo(todo.text, todoText.value, todoText)" />
        </span>
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="updateCompleted($event.target.checked)" />
      </li>
    </ul>
  `
})
export default class ContentPageComponent {
  date: Date = new Date();
  @Input() todos: Todo[];
  @Output() onAddTodo = new EventEmitter<string>();
  @Output() onUpdateTodo = new EventEmitter<Object>();

  addTodo(todo: string): void {
    this.onAddTodo.emit(todo);
  }

  updateTodo(prevText, newText) {
    this.onUpdateTodo.emit({prevText, newText});
  }

}
