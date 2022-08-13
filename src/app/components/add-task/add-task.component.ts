import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.addTask.valueChanges.subscribe(() => console.log('value ->', this.addTask.value))
  }

 addNewTask(v: string){
   console.log(' -> ', v)
 }

}
