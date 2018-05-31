import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileMComponent } from './textile-m.component';

describe('TextileMComponent', () => {
  let component: TextileMComponent;
  let fixture: ComponentFixture<TextileMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
