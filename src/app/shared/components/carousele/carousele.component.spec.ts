import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouseleComponent } from './carousele.component';

describe('CarouseleComponent', () => {
  let component: CarouseleComponent;
  let fixture: ComponentFixture<CarouseleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouseleComponent]
    });
    fixture = TestBed.createComponent(CarouseleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
