import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardsComponent } from './postcards.component';

describe('PostcardsComponent', () => {
  let component: PostcardsComponent;
  let fixture: ComponentFixture<PostcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostcardsComponent]
    });
    fixture = TestBed.createComponent(PostcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
