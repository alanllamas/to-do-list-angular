import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDoneDetailComponent } from './task-done-detail.component';

describe('TaskDoneDetailComponent', () => {
  let component: TaskDoneDetailComponent;
  let fixture: ComponentFixture<TaskDoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
