import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiquesStepComponent } from './caracteristiques-step.component';

describe('CaracteristiquesStepComponent', () => {
  let component: CaracteristiquesStepComponent;
  let fixture: ComponentFixture<CaracteristiquesStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CaracteristiquesStepComponent]
    });
    fixture = TestBed.createComponent(CaracteristiquesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
