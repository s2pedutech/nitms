import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursessubcategoryComponent } from './coursessubcategory.component';

describe('CoursessubcategoryComponent', () => {
  let component: CoursessubcategoryComponent;
  let fixture: ComponentFixture<CoursessubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursessubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursessubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
