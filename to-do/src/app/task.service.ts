import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



import { map } from 'rxjs/operators';


import { Observable  } from 'rxjs';
import { Task } from './shared/task.model';

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

  addTask (task: Task): Observable<Task> {
    return 
    this.http.post(`${this.endpointUrl}/list `, {task: task}, httpOptions) 
    .pipe(
      // catchError(this.handleError('addTask', task))
    );
      
  }

}




