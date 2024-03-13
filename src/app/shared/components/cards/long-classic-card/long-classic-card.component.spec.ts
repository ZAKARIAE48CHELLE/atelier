import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongClassicCardComponent } from './long-classic-card.component';

describe('LongClassicCardComponent', () => {
  let component: LongClassicCardComponent;
  let fixture: ComponentFixture<LongClassicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LongClassicCardComponent]
    });
    fixture = TestBed.createComponent(LongClassicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
