import Todo from './todo.model';

// Consider moving to Interface?
// interface User {
//   name: string;
// }
export default class User {
  name: string;
  todos: Todo[];
}
