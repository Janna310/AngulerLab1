import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Todo } from '../interfaces/todo';
import { discardPeriodicTasks } from '@angular/core/testing';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  filterTasks: string;

  todo: Todo[] = [
    {
      task: 'Fold clothes',
      completed: false,
    },
    {
      task: 'Put Clothes in Dresser',
      completed: false,
    },
    {
      task: 'Relax',
      completed: false,
    },
    {
      task: 'Try to Pet Cat',
      completed: true,
    },
    {
      task: 'Pet Dog',
      completed: false,
    },
    {
      task: 'Be Awesome',
      completed: false,
    },
  ];

  filterTodos = (e) => {
    console.log('filtering');
  };

  completedTask(taskCompleted) {
    taskCompleted.completed = !taskCompleted.completed;
  }

  addTask(newTask) {
    this.todo.push({
      task: newTask,
      completed: false,
    });
  }

  removeTask(item) {
    console.log(item);
    this.todo = this.todo.filter((t) => t.task !== item.task);
  }

  constructor() {}

  ngOnInit(): void {}
}
