import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/Interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: ITask[];
  @Input() tasksComposition: { completed: Number, toDo: Number };

  constructor() {
    this.tasks = [];
    this.tasksComposition =  { completed: 0, toDo: 0 }
  }

  ngOnInit(): void {}
}
