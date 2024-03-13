import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireDetailsComponent } from './details-annuaire.component';

describe('AnnuaireDetailsComponent', () => {
  let component: AnnuaireDetailsComponent;
  let fixture: ComponentFixture<AnnuaireDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnnuaireDetailsComponent]
    });
    fixture = TestBed.createComponent(AnnuaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
