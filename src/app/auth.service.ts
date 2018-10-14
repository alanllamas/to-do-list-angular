import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './shared/models/user.model';




// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': ' ${token}'
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  loggedUser : User[] = [];
  user:string;
  
  Login(user,pw) : Observable<object> {
    this.user = user;
    return this.http.post<any>('http://localhost:8000/api-token-auth/',{ username:user, password:pw})
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          user.name = this.user;
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        }
      )
    )
  }

  Signin(user:User) : Observable<User> {

    return this.http.post<any>('http://localhost:8000/user/create/',user)
    
  }

  

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.loggedUser = []
    window.location.pathname = "/login"
  }

}

