import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EservicesteperComponent } from './eservicesteper.component';

describe('EservicesteperComponent', () => {
  let component: EservicesteperComponent;
  let fixture: ComponentFixture<EservicesteperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EservicesteperComponent]
    });
    fixture = TestBed.createComponent(EservicesteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
