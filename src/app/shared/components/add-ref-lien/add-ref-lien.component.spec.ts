import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefLienComponent } from './add-ref-lien.component';

describe('AddRefLienComponent', () => {
  let component: AddRefLienComponent;
  let fixture: ComponentFixture<AddRefLienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddRefLienComponent]
    });
    fixture = TestBed.createComponent(AddRefLienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
