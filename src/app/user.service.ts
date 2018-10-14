import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpointUrl: string = 'http://localhost:8000/user';

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<User[]> {
    return  this.http.get<User[]>(`${this.endpointUrl}/list/`)
  }
}
