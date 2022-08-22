import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IAppState, ITask } from 'src/app/Interfaces';
import { selectTasks } from 'src/app/components/task.selector';
import { Store } from '@ngrx/store';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  tasks!: ITask[];
  destroy$: Subject<any> = new Subject<any>();
  newTaskId!: Number;
  tasksComposition!: { completed: Number; toDo: Number };

  constructor(private store: Store<IAppState>) {
    this.store
      .select(selectTasks)
      .pipe(takeUntil(this.destroy$))
      .pipe(map((data) => this.separateByStatus (data)))
      .subscribe((data) => {
        this.tasks = data;
        this.newTaskId = this.getNewTaskId();
        this.tasksComposition = this.getTasksComposition(data);
      });
  }

  ngOnInit(): void {
    this.getTasksComposition(this.tasks);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getTasksComposition(data: ITask[]) {
    const completed: Number = data.filter((el) => el.status === 'done').length;
    const toDo: Number = data.length - +completed;
    return { completed, toDo };
  }

  getNewTaskId(): Number {
    let newTaskId: number = -1;
    const arrOFTaskIndexes = this.tasks.map((el) => el.id);
    for (let i = 0; i < arrOFTaskIndexes.length; i++) {
      if (!arrOFTaskIndexes.includes(i)) {
        newTaskId = i;
      }
    }
    if (newTaskId < 0) {
      newTaskId = arrOFTaskIndexes.length;
    }
    return newTaskId;
  }

  separateByStatus(data: ITask[]): ITask[] {
    const completed = data.filter((el) => el.status === 'done');
    const toDo = data.filter((el) => el.status === 'to do');
    return [...toDo, ...completed];
  }
} 