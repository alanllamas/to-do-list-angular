import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../shared/models/task.model';

@Component({
  selector: 'task-done-list',
  templateUrl: './task-done-list.component.html',
  styleUrls: ['./task-done-list.component.scss']
})
export class TaskDoneListComponent implements OnInit {

  doneTasks: Task[];
  constructor(private taskService : TaskService ) { }

  ngOnInit() {
    this.taskService.fetchTasks().subscribe((tasks: Task[]) => {
         
       console.log('tasks', tasks);
       return this.doneTasks = tasks;
     })
  }

}
