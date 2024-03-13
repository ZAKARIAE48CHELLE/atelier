import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienSliderComponent } from './soutien-slider.component';

describe('SoutienSliderComponent', () => {
  let component: SoutienSliderComponent;
  let fixture: ComponentFixture<SoutienSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SoutienSliderComponent]
    });
    fixture = TestBed.createComponent(SoutienSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
