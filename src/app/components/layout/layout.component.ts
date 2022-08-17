import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IAppState, ITask } from 'src/app/Interfaces';
import { selectTasks } from 'src/app/components/task.selector';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  tasks!: ITask[];
  destroy$: Subject<any> = new Subject<any>();
  newTaskId!: Number;

  constructor(private store: Store<IAppState>) {
    //this.tasks = [{id: 1, title: '1', text: '1'}]
    this.store
      .select(selectTasks)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.tasks = data;
        this.newTaskId = this.getNewTaskId();
        console.log('new tasks -> ', data)
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getNewTaskId(): Number {
    let newTaskId: number = -1;
    const arr = this.tasks.map((el) => el.id);
    for (let i = 0; i < arr.length; i++) {
      if (!arr.includes(i)) {
        newTaskId = i;
      }
    }
    if (newTaskId < 0) {
      return arr.length;
    }
    return newTaskId;
  }
}
