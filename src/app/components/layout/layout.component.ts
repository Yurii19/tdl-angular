import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IAppState, ITask } from 'src/app/Interfaces';
import { selectTasks } from 'src/app/components/layout/task.selector';
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

  constructor(private store: Store<IAppState>) {
    //this.tasks = [{id: 1, title: '1', text: '1'}]
    this.store
      .select(selectTasks)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => { this.tasks = data});
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
