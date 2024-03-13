import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenmentComponent } from './evenment.component';

describe('EvenmentComponent', () => {
  let component: EvenmentComponent;
  let fixture: ComponentFixture<EvenmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvenmentComponent]
    });
    fixture = TestBed.createComponent(EvenmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
