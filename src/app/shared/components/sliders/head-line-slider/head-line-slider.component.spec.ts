import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLineSliderComponent } from './head-line-slider.component';

describe('HeadLineSliderComponent', () => {
  let component: HeadLineSliderComponent;
  let fixture: ComponentFixture<HeadLineSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeadLineSliderComponent]
    });
    fixture = TestBed.createComponent(HeadLineSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
