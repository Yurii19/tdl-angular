import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IAppState } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { removeTask } from 'src/app/store/task.reducer';

@Component({
  selector: 'app-td-card',
  templateUrl: './td-card.component.html',
  styleUrls: ['./td-card.component.scss']
})
export class TdCardComponent implements OnInit {

  @Input() settings: any = { id: 0,title: 'title', description: 'text', status: 'to do', };

  isDone : String = '';

  constructor( private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.isDone = this.settings.status === 'to do' ? '' : 'done-card';
  }

  removeTask() {
    this.store.dispatch(removeTask({taskId : this.settings.id}));
  }

}
