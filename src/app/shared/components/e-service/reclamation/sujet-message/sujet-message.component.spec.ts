import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetMessageComponent } from './sujet-message.component';

describe('SujetMessageComponent', () => {
  let component: SujetMessageComponent;
  let fixture: ComponentFixture<SujetMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SujetMessageComponent]
    });
    fixture = TestBed.createComponent(SujetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
