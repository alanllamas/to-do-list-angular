import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  taskList;

  constructor(private taskService : TaskService ) { 
  }
  
  ngOnInit() {
    
    this.taskService.fetchTasks().subscribe((tasks) => {
      return this.taskList = tasks;
    })
  }

}
