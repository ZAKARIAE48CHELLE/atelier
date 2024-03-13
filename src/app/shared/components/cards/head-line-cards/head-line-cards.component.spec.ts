import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLineCardsComponent } from './head-line-cards.component';

describe('HeadLineCardsComponent', () => {
  let component: HeadLineCardsComponent;
  let fixture: ComponentFixture<HeadLineCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeadLineCardsComponent]
    });
    fixture = TestBed.createComponent(HeadLineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
