import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';
import { Task } from '../shared/task.model';
import { User } from '../shared/user.model';

import {  FormGroup, FormControl } from '@angular/forms';

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
    user: new FormControl(),
    description: new FormControl()

  });
  task_values;
  

  constructor(private taskService: TaskService) { 
    this.taskService.fetchTasks().subscribe((tasks) => {
      tasks.map((task:Task) => {

        return this.choices = task.PRIORITY_CHOICES;
         
      })
    })
    this.taskService.fetchUsers().subscribe((users: User[]) => {
        
      return this.users = users

    })

  }

  ngOnInit() {
   
    

  }
 
   
  // get values(){ 
  // var name = this.task_form.get('name');
  // var duration = this.task_form.get('duration');
  // var dead_line = this.task_form.get('dead_line');
  // var priority = this.task_form.get('priority');
  // var user = this.task_form.get('user');
  // var description = this.task_form.get('description');

  // this.task_values = {
  //   name : name.value,
  //   duration : duration.value ,
  //   dead_line : dead_line.value ,
  //   priority : priority.value ,
  //   user : user.value ,
  //   description : description.value ,
  // }
    // console.log(this.task_values.user);
    
  //   return this.task_values
  //  }
  addTask = () =>{
  
    console.log('task');
    // this.values.user = JSON.stringify(this.users[0]);
    const task = Object.assign({}, this.task_form.value);
    // task.user = JSON.stringify(task.user);
    
    console.log(task);
    
      return this.taskService.addTask(task).subscribe((res)=>{
        console.log(res)
        
      })

  }

}
// get message(){ 
//   const name = this.task_form.get('message').value;
//   console.log(name);
  
//   // const name = this.task_form.controls['message'];
//   // const duration = this.task_form.controls['message'];
//   // const dead_line = this.task_form.controls['message'];
//   // const priority = this.task_form.controls['message'];
//   // const user = this.task_form.controls['message'];
//   // const description = this.task_form.controls['message'];
//   this.task_values = {
//     name : name.value,
//     // duration : duration.value,
//     // dead_line : dead_line.value,
//     // priority : priority.value,
//     // user : user.value,
//     // description : description.value,
//   }
//   return this.task_values
//  }
