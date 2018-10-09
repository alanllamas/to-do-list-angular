import { Component } from '@angular/core';
import './task/task.component';
import { TaskService } from './task.service';
import { User } from './shared/user.model';
import { Task } from './shared/task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  title = 'to-do';
  
  day ;
  date;  
  hours ;
  minutes ;
  time ;
  interval;
  d;
  user_list:User[];
  task_list:Task[];
  
  checkTime:Function = () => {
    this.d = new Date();
    this.day = this.d.getDay();
    this.date = `${this.days[this.day]}  ${this.d.toISOString().split('T')[0]}`;  
    this.hours = this.d.getHours();
    this.minutes = (this.d.getMinutes()<10?'0':'') + this.d.getMinutes();
    this.time = `${this.hours}:${this.minutes}`;
    // console.log(`time ${this.time}`);
  };
  constructor(private taskService: TaskService){

    this.interval = setInterval(this.checkTime, 1000)
    this.taskService.fetchUsers().subscribe((users:User[]) => {
      this.user_list = users;
      // this.task_list = users[0].tasks;
      console.log(this.user_list);
      
    })

  }
  onInit(){
   
    

  }

}
