import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCardComponent } from './ads-card.component';

describe('AdsCardComponent', () => {
  let component: AdsCardComponent;
  let fixture: ComponentFixture<AdsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdsCardComponent]
    });
    fixture = TestBed.createComponent(AdsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
