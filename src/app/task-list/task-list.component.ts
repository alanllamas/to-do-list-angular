import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../shared/models/task.model';
import { User } from '../shared/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  
  taskList: Task[] = [];
  logged: User[]
  
  
  constructor(private taskService : TaskService, private authService: AuthService) { 
  }
  
  ngOnInit() {
    this.logged = this.authService.loggedUser;
    

    this.taskService.fetchTasks().subscribe(
      (tasks:Task[]) => {
        console.log(tasks);
        tasks.map((task:any) => {
          console.log(task.url);
          this.logged[0].tasks.map((userTask) => {
            console.log(userTask );
            
            if(task.url == userTask){
              this.taskList.push(task);
            }else if(this.logged[0].tasks == []){
              this.taskList = [];
            }
          })
          // if(task)
        })
        console.log(this.logged[0]);
        
        
        
        return this.taskList;
      }
    )
  }

}
