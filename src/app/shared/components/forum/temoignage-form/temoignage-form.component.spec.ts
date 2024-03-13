import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageFormComponent } from './temoignage-form.component';

describe('TemoignageFormComponent', () => {
  let component: TemoignageFormComponent;
  let fixture: ComponentFixture<TemoignageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemoignageFormComponent]
    });
    fixture = TestBed.createComponent(TemoignageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
