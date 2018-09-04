import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsformsComponent } from './studentsforms.component';

describe('StudentsformsComponent', () => {
  let component: StudentsformsComponent;
  let fixture: ComponentFixture<StudentsformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
