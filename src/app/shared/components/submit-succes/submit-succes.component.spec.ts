import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSuccesComponent } from './submit-succes.component';

describe('SubmitSuccesComponent', () => {
  let component: SubmitSuccesComponent;
  let fixture: ComponentFixture<SubmitSuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SubmitSuccesComponent]
    });
    fixture = TestBed.createComponent(SubmitSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
