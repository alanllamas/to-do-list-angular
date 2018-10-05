import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';
import { Task } from '../shared/task.model';
import { User } from '../shared/user.model';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  choices;
  users;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.fetchTasks().subscribe((tasks) => {
      tasks.map((task:Task) => {

        return this.choices = task.PRIORITY_CHOICES;
         
      })
    })
    this.taskService.fetchUsers().subscribe((users) => {
      
      return this.users = users

    })
  }

  addTask = () =>{
    console.log('task');

    
    
    this.taskService.addTask(task).subscribe((res)=>{
      console.log(res);
      
    })
  }

}
