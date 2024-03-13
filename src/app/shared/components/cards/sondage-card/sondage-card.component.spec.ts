import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageCardComponent } from './sondage-card.component';

describe('SondageCardComponent', () => {
  let component: SondageCardComponent;
  let fixture: ComponentFixture<SondageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SondageCardComponent]
    });
    fixture = TestBed.createComponent(SondageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
