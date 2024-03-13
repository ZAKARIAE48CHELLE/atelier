import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReponseComponent } from './question-reponse.component';

describe('QuestionReponseComponent', () => {
  let component: QuestionReponseComponent;
  let fixture: ComponentFixture<QuestionReponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionReponseComponent]
    });
    fixture = TestBed.createComponent(QuestionReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
