import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [
    {
      task: 'Fold clothes',
      completed: false
    },
    {
      task: 'Put Clothes in Dresser',
      completed: false
    },
    {
      task: 'Relax',
      completed: false
    },
    {
      task: 'Try to Pet Cat',
      completed: true
    },
    {
      task: 'Pet Dog',
      completed: false
    },
    {
      task: 'Be Awesome',
      completed: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
