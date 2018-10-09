import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {
  @Input() task :Task

  done;
  constructor() { }

  ngOnInit() {
    // if(this.task.done == 1 && this.task.duration>0){
    //   this.done = 1;

    // }
    
  }

}
