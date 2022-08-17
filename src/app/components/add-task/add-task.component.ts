import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAppState, ITask } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/task.reducer';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  addTask = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  })

  constructor( 
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
   // this.addTask.valueChanges.subscribe(() => console.log('value ->', this.addTask.value))
  }

 addNewTask() {
   const newTask: ITask = {
     id: 2,
     title: this.addTask.controls['title'].value,
     text: this.addTask.controls['text'].value,
   }
   this.store.dispatch(addTask({task: newTask}))
 }

}
