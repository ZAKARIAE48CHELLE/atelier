import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EserviceChoiceComponent } from './eservice-choice.component';

describe('EserviceChoiceComponent', () => {
  let component: EserviceChoiceComponent;
  let fixture: ComponentFixture<EserviceChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EserviceChoiceComponent]
    });
    fixture = TestBed.createComponent(EserviceChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
