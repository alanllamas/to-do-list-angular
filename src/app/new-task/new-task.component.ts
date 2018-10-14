import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';
import { Task } from '../shared/models/task.model';
import { User } from '../shared/models/user.model';

import {  FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  choices;
  users: User[];
  task_form =  new FormGroup({
    name: new FormControl(),
    duration: new FormControl(),
    dead_line: new FormControl(),
    priority:  new FormControl(),
    // user: new FormControl(),
    description: new FormControl()
  });
  task_values;
  
  constructor(private taskService: TaskService, private userService: UserService) { 
    this.taskService.fetchTasks().subscribe((tasks) => {
      tasks.map((task:Task) => {

        return this.choices = task.PRIORITY_CHOICES;
         
      })
    })
    this.userService.fetchUsers().subscribe((users: User[]) => {
        
      return this.users = users

    })

  }

  ngOnInit() { 
  }
 
  addTask = () =>{
  
    console.log('task');
    // this.values.user = JSON.stringify(this.users[0]);
    const task = Object.assign({}, this.task_form.value);
    // task.user = JSON.stringify(task.user);
    
    console.log(task);
    
      return this.taskService.addTask(task).subscribe((res)=>{
        window.location.pathname = "/";
        
      })

  }

}
