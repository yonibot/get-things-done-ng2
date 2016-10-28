import { Component } from '@angular/core';
import SidebarComponent from './sidebar.component';
import ContentPage from './content-page.component';
import Todo from './todo.model';

@Component({
  selector: 'todos-root',
  template: `
    <div class="container">
      <sidebar class="sidebar"></sidebar>
      <content-page
        class="content"
        [todos]="todos"
        (onAddTodo)="onAddTodo($event)"
        (onUpdateTodo)="onUpdateTodo($event)"></content-page>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        flex: 1
      }
      .sidebar {
        flex: 0.25;
        background-color: #0f5fb9;
        color: white;
      }
      .content {
        flex: 0.75;
      }
    `
  ]
})
export default class TodosRootComponent {
  todos: Todo[] = [];

  onAddTodo(todoText) {
    const newTodos = [...this.todos, new Todo(todoText)];
    this.todos = newTodos;
  }

  onUpdateTodo(prev_and_new) {
    let prevText = prev_and_new["prevText"];
    let newText = prev_and_new["newText"];
    this.todos.map(t=> {
      t.text === prevText ? Object.assign({}, t, {text: newText}) : t
    });
  }

}
