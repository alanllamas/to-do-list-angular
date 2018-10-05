import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task_id;
  task_detail;
  time;
  pause;
  stop;
  // handleDetail:Function;

  constructor(private route: ActivatedRoute,private taskService: TaskService) {

    this.pause = document.getElementById('pause');
    this.stop = document.getElementById('stop')

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.task_id = params.id;
      console.log('params: ',params);
      
    })
    this.taskService.fetchTask(this.task_id).subscribe((task) =>{
      this.task_detail = task;
      console.log(this.task_detail);
      
    })
    setTimeout(()=>{
      if (!this.task_detail.time_remaining) {

        
        this.time = this.task_detail.duration;
      }else{
        this.time = this.task_detail.time_remaining
      }
      console.log(`clock started ${this.time}`);
      this.runClock()
    },1000)
  }
  
  public handleDetail:Function = (task:Task, time:number, done:boolean,location:string) => {
    console.log('in handledetail');
    if (!done) {
      task.time_remaining = this.time;
    }else{

      task.time_done = Number(task.duration) - this.time;
    }
    console.log(task);
    task.done = done;
    this.taskService.updateTask(this.task_id,task).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
      );  
    // setTimeout(() => {
    //   window.location.pathname = "/"
    // }, 2000);

  }
  runClock = () => {
    setInterval(() => {
      this.time -=1 ;
      console.log(this.time);
    }, 60000)
    return this.time;
  }

}
