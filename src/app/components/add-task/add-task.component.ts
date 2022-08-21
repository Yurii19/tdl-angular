import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppState, ITask } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/task.reducer';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})

export class AddTaskComponent implements OnInit {

  @Input() newTaskId: Number = 0 ;

  addTask = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
  });

  constructor(
    private store: Store<IAppState>
    ) {}

  ngOnInit(): void { }

  addNewTask() {
    if (
      this.addTask.controls['title'].invalid ||
      this.addTask.controls['text'].invalid
    ) {
      return;
    }

    const newTask: ITask = {
      id: this.newTaskId,
      title: this.addTask.controls['title'].value!,
      description: this.addTask.controls['text'].value!,
      status: 'to do',
    };
    this.store.dispatch(addTask({ task: newTask }));
    this.addTask.reset();
  }

}
