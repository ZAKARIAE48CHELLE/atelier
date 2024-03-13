import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCardsComponent } from './quiz-cards.component';

describe('QuizCardsComponent', () => {
  let component: QuizCardsComponent;
  let fixture: ComponentFixture<QuizCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizCardsComponent]
    });
    fixture = TestBed.createComponent(QuizCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
