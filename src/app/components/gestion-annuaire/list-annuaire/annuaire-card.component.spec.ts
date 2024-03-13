import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireCardComponent } from './annuaire-card.component';

describe('AnnuaireCardComponent', () => {
  let component: AnnuaireCardComponent;
  let fixture: ComponentFixture<AnnuaireCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnnuaireCardComponent]
    });
    fixture = TestBed.createComponent(AnnuaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
