export default class Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditable: boolean;

  constructor(text: string, completed = false) {
    this.text = text;
    this.completed = completed;
    this.isEditable = false;
  }
}
