import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList;

  constructor(private taskService : TaskService ) { 
    // let task = Task;    , private Task : Task
  }

  ngOnInit() {
    this.taskService.fetchTasks().subscribe((tasks) => {
      
      console.log('tasks', tasks);
      return this.taskList = tasks;
    })
  }

}
