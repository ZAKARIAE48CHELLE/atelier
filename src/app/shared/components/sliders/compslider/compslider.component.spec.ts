import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsliderComponent } from './compslider.component';

describe('CompsliderComponent', () => {
  let component: CompsliderComponent;
  let fixture: ComponentFixture<CompsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompsliderComponent]
    });
    fixture = TestBed.createComponent(CompsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
