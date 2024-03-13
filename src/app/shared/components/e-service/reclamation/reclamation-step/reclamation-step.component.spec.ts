import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationStepComponent } from './reclamation-step.component';

describe('ReclamationStepComponent', () => {
  let component: ReclamationStepComponent;
  let fixture: ComponentFixture<ReclamationStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReclamationStepComponent]
    });
    fixture = TestBed.createComponent(ReclamationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
