import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteAnnonceBigCarouselComponent } from './petite-annonce-big-carousel.component';

describe('PetiteAnnonceBigCarouselComponent', () => {
  let component: PetiteAnnonceBigCarouselComponent;
  let fixture: ComponentFixture<PetiteAnnonceBigCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PetiteAnnonceBigCarouselComponent]
    });
    fixture = TestBed.createComponent(PetiteAnnonceBigCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
