import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursescategoryComponent } from './coursescategory.component';

describe('CoursescategoryComponent', () => {
  let component: CoursescategoryComponent;
  let fixture: ComponentFixture<CoursescategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursescategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursescategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
