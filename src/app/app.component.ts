import { Component } from '@angular/core';
import './task/task.component';
import { TaskService } from './task.service';
import { User } from './shared/models/user.model';


import { AuthService } from './auth.service';
import { Token } from '@angular/compiler';
import { UserService } from './user.service';
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
  task_list:string[];
  logged : User[];
  currentUser: any;
  dropdown: boolean = false;

  token: Token;
  
  checkTime:Function = () => {
    this.d = new Date();
    this.day = this.d.getDay();
    this.date = `${this.days[this.day]}  ${this.d.toISOString().split('T')[0]}`;  
    this.hours = this.d.getHours();
    this.minutes = (this.d.getMinutes()<10?'0':'') + this.d.getMinutes();
    this.time = `${this.hours}:${this.minutes}`;
    // console.log(`time ${this.time}`);
  };
  constructor(private userService: UserService,  private authService: AuthService, private taskService : TaskService ){
    this.logged = this.authService.loggedUser;
    
    this.interval = setInterval(this.checkTime, 1000)
    this.userService.fetchUsers().subscribe((users:User[]) => {
      users.map((user:User) => {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('currentUser: ' ,this.currentUser);
        if (user.username === this.currentUser.name)   this.logged.push(user);
      })
      console.log(this.logged[0]);
      
      this.user_list = users;

    })

  }
  onInit(){
  }
  showDropdown = () => {
    console.log("clicked dropdown");
    
    this.dropdown = !this.dropdown
  }

  logout = () => {
    console.log("logout");
    
    this.authService.logout()
    window.location.pathname = "/login"
  }

}
