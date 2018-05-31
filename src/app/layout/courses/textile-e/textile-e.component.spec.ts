import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileEComponent } from './textile-e.component';

describe('TextileEComponent', () => {
  let component: TextileEComponent;
  let fixture: ComponentFixture<TextileEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
