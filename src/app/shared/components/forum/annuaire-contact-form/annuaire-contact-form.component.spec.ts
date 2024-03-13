import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireContactFormComponent } from './annuaire-contact-form.component';

describe('AnnuaireContactFormComponent', () => {
  let component: AnnuaireContactFormComponent;
  let fixture: ComponentFixture<AnnuaireContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnnuaireContactFormComponent]
    });
    fixture = TestBed.createComponent(AnnuaireContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
