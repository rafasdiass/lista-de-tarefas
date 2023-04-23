import { Component, OnInit } from '@angular/core';

interface Todo {
  task: string;
  createdAt: Date;
  completed: boolean;
  completionDate?: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo = '';

  constructor() {}

  ngOnInit(): void {}

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todos.push({
        task: this.newTodo.trim(),
        createdAt: new Date(),
        completed: false,
      });
      this.newTodo = '';
    }
  }

  toggleCompletion(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
    if (this.todos[index].completed) {
      this.todos[index].completionDate = new Date();
    } else {
      this.todos[index].completionDate = undefined;
    }
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
