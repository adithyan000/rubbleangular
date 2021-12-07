import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkprocessComponent } from './workprocess.component';

describe('WorkprocessComponent', () => {
  let component: WorkprocessComponent;
  let fixture: ComponentFixture<WorkprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
