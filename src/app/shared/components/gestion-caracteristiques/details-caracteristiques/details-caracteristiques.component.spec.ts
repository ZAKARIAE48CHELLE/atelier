import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCaracteristiquesComponent } from './details-caracteristiques.component';

describe('DetailsCaracteristiquesComponent', () => {
  let component: DetailsCaracteristiquesComponent;
  let fixture: ComponentFixture<DetailsCaracteristiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsCaracteristiquesComponent]
    });
    fixture = TestBed.createComponent(DetailsCaracteristiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
