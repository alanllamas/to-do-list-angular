import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


import { Task } from './shared/task.model';
import { User } from './shared/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private endpointUrl: string = 'http://localhost:8000/task';

  constructor(private http: HttpClient) { }

  fetchTasks(): Observable<Task[]> {
    
    return  this.http.get<Task[]>(`${this.endpointUrl}/list`)

  }

  fetchTask( task_id: number ): Observable<Task> {
    
    return this.http
    .get<Task>(`${this.endpointUrl}/detail/${task_id}/`)

  }

  updateask( task_id: number, task : Task) {
    return this.http.put(`${this.endpointUrl}/detail/${task_id}/`,JSON.stringify(task),httpOptions)
  }
  updateTask(task_id: number, param: any): Observable<any> {
    console.log('updateTask');
    
    let body = JSON.stringify(param);
    console.log('updateTask body');
    return this.http
      .patch(`${this.endpointUrl}/detail/${task_id}/`, param)
      // .subscribe(
      //   data => {
      //       console.log("PUT Request is successful ", data);
      //   },
      //   error => {
      //       console.log("Error", error);
      //   }
      // );  
       
  }     


  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.endpointUrl}/list/`, task)      

  }
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}

  fetchUsers(): Observable<User[]> {
    return  this.http.get<User[]>(`${this.endpointUrl}/user/list/`)
  }

}




