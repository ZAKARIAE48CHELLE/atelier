import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentStepComponent } from './document-step.component';

describe('DocumentStepComponent', () => {
  let component: DocumentStepComponent;
  let fixture: ComponentFixture<DocumentStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocumentStepComponent]
    });
    fixture = TestBed.createComponent(DocumentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
