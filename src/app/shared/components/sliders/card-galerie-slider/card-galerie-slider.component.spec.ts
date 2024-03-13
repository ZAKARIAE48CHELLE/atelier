import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGalerieSliderComponent } from './card-galerie-slider.component';

describe('CardGalerieSliderComponent', () => {
  let component: CardGalerieSliderComponent;
  let fixture: ComponentFixture<CardGalerieSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardGalerieSliderComponent]
    });
    fixture = TestBed.createComponent(CardGalerieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
