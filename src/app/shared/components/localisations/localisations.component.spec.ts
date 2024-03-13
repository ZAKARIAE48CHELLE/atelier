import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationsComponent } from './localisations.component';

describe('LocalisationsComponent', () => {
  let component: LocalisationsComponent;
  let fixture: ComponentFixture<LocalisationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalisationsComponent]
    });
    fixture = TestBed.createComponent(LocalisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
