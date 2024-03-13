import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPicCardrightComponent } from './big-pic-cardright.component';

describe('BigPicCardrightComponent', () => {
  let component: BigPicCardrightComponent;
  let fixture: ComponentFixture<BigPicCardrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BigPicCardrightComponent]
    });
    fixture = TestBed.createComponent(BigPicCardrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
