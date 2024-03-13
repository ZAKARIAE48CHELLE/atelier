import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueRepresentationComponent } from './marque-representation.component';

describe('MarqueRepresentationComponent', () => {
  let component: MarqueRepresentationComponent;
  let fixture: ComponentFixture<MarqueRepresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarqueRepresentationComponent]
    });
    fixture = TestBed.createComponent(MarqueRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
