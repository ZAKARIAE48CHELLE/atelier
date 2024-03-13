import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteAnnonceMApComponent } from './petite-annonce-map.component';

describe('PetiteAnnonceMApComponent', () => {
  let component: PetiteAnnonceMApComponent;
  let fixture: ComponentFixture<PetiteAnnonceMApComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PetiteAnnonceMApComponent]
    });
    fixture = TestBed.createComponent(PetiteAnnonceMApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
