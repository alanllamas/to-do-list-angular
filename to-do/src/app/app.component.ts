import { Component } from '@angular/core';
import './task/task.component';
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
  
  checkTime:Function = () => {
    this.d = new Date();
    this.day = this.d.getDay();
    this.date = `${this.days[this.day]}  ${this.d.toISOString().split('T')[0]}`;  
    this.hours = this.d.getHours();
    this.minutes = (this.d.getMinutes()<10?'0':'') + this.d.getMinutes();
    this.time = `${this.hours}:${this.minutes}`;
    // console.log(`time ${this.time}`);
  };
  constructor(){

    this.interval = setInterval(this.checkTime, 1000)

  }
  onInit(){
   
    

  }

}
