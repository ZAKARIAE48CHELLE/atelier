import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongCardComponent } from './long-card.component';

describe('LongCardComponent', () => {
  let component: LongCardComponent;
  let fixture: ComponentFixture<LongCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LongCardComponent]
    });
    fixture = TestBed.createComponent(LongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
