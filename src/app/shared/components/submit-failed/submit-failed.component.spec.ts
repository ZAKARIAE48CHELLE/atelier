import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFailedComponent } from './submit-failed.component';

describe('SubmitFailedComponent', () => {
  let component: SubmitFailedComponent;
  let fixture: ComponentFixture<SubmitFailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubmitFailedComponent]
    });
    fixture = TestBed.createComponent(SubmitFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
