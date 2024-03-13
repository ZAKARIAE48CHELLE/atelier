import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSmallPicCardSubtitleComponent } from './left-small-pic-card-subtitle.component';

describe('LeftSmallPicCardSubtitleComponent', () => {
  let component: LeftSmallPicCardSubtitleComponent;
  let fixture: ComponentFixture<LeftSmallPicCardSubtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeftSmallPicCardSubtitleComponent]
    });
    fixture = TestBed.createComponent(LeftSmallPicCardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
