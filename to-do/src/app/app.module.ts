import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

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

import { OrderModule } from 'ngx-order-pipe';


const appRoutes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'done', component: TaskDoneListComponent },
  { path: 'new', component: NewTaskComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'done-detail/:id', component: TaskDoneDetailComponent },
  
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
    TaskDoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
