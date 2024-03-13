import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPicCardComponent } from './big-pic-card.component';

describe('BigPicCardComponent', () => {
  let component: BigPicCardComponent;
  let fixture: ComponentFixture<BigPicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BigPicCardComponent]
    });
    fixture = TestBed.createComponent(BigPicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
