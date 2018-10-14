import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from 'rxjs';


import { Task } from './shared/models/task.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Token': 'Authorization ${}'
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
  updateTask(task_id: number, task: Task): Observable<any> {

    return this.http
      .patch(`${this.endpointUrl}/detail/${task_id}/`, task,httpOptions)
  }     


  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.endpointUrl}/list/`, task)      

  }

 

}




