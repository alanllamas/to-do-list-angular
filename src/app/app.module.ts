import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskDoneListComponent } from './task-done-list/task-done-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDoneDetailComponent } from './task-done-detail/task-done-detail.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TaskService } from './task.service';


import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { AuthGuard } from './_guards/auth.guard';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: TaskListComponent , canActivate: [AuthGuard]},
  { path: 'done', component: TaskDoneListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewTaskComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: TaskDetailComponent, canActivate: [AuthGuard] },
  { path: 'done-detail/:id', component: TaskDoneDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskListComponent,
    PageNotFoundComponent,
    TaskDoneListComponent,
    NewTaskComponent,
    TaskDoneDetailComponent,
    TaskDoneComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [
    TaskService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
