import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSmallPicCardComponent } from './left-small-pic-card.component';

describe('LeftSmallPicCardComponent', () => {
  let component: LeftSmallPicCardComponent;
  let fixture: ComponentFixture<LeftSmallPicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeftSmallPicCardComponent]
    });
    fixture = TestBed.createComponent(LeftSmallPicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
