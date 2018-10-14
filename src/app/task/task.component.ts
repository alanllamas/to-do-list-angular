import { Component, OnInit, Input } from '@angular/core';
import  { Task } from '../shared/models/task.model';

   

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task :Task

  constructor() { }

  ngOnInit() {
   
  }
 

}
