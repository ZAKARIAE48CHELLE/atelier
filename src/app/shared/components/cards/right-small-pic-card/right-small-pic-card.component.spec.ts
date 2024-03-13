import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSmallPicCardComponent } from './right-small-pic-card.component';

describe('RightSmallPicCardComponent', () => {
  let component: RightSmallPicCardComponent;
  let fixture: ComponentFixture<RightSmallPicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RightSmallPicCardComponent]
    });
    fixture = TestBed.createComponent(RightSmallPicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
