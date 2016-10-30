import { Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import Todo from './todo.model';

@Component({
  selector: 'content-page',
  template: `
    <h1>To Do Today - {{ date }}</h1>
    <br />
    <input
      #newTodo
      (keyup.enter)="addTodo(newTodo.value); newTodo.value=''" />
    <button
      (click)="addTodo(newTodo.value); newTodo.value=''">Add</button>
    <ul>
      <li
        *ngFor="let todo of sortedTodos(); let i = index;"
        #todoListItem>
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="toggleCompleted(todo)" />
        <span
          *ngIf="!todo.isEditable"
          [class.todo-style]="todo.completed"
          (click)="todo.isEditable = true">
          {{ todo.text }}
        </span>
        <span
          *ngIf="todo.isEditable">
          <input
            #todoText
            [value]="todo.text"
            (keyup.enter)="updateTodo(todo.text, todoText.value, todoText);" />
        </span>

      </li>
    </ul>
  `,
  styles: [
    `.todo-style {
      text-decoration: line-through;
    }`
  ]
})
export default class ContentPageComponent {
  date: Date = new Date();
  @Input() todos: Todo[];
  @Input() onToggleCompleted;
  @Output() onAddTodo = new EventEmitter<string>();
  @Output() onUpdateTodo = new EventEmitter<Object>();

  sortedTodos(): Todo[] {
    return this.todos.sort((a: Todo, b: Todo) => {
      return a.completed === b.completed ? 0 : a.completed ? -1 : 1;
    }).reverse();
  }

  addTodo(todo: string): void {
    this.onAddTodo.emit(todo);
  }

  updateTodo(prevText, newText) {
    // Allows data to go up multiple levels without explicitly passing it?
    this.onUpdateTodo.emit({prevText, newText});
  }

  toggleCompleted(todo) {
    this.onToggleCompleted(todo);
  }

  todoStyle(todo) {
    return todo.completed ? 'strike-through' : 'none';
  }

}
