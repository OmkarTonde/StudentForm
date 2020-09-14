import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregFormComponent } from './studentreg-form.component';

describe('StudentregFormComponent', () => {
  let component: StudentregFormComponent;
  let fixture: ComponentFixture<StudentregFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
