import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCourseComponent } from './get-course.component';

describe('GetCourseComponent', () => {
  let component: GetCourseComponent;
  let fixture: ComponentFixture<GetCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
