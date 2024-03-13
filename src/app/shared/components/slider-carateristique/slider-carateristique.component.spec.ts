import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarateristiqueComponent } from './slider-carateristique.component';

describe('SliderCarateristiqueComponent', () => {
  let component: SliderCarateristiqueComponent;
  let fixture: ComponentFixture<SliderCarateristiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SliderCarateristiqueComponent]
    });
    fixture = TestBed.createComponent(SliderCarateristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
