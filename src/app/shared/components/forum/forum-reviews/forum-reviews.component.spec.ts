import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumReviewsComponent } from './forum-reviews.component';

describe('ForumReviewsComponent', () => {
  let component: ForumReviewsComponent;
  let fixture: ComponentFixture<ForumReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForumReviewsComponent]
    });
    fixture = TestBed.createComponent(ForumReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
