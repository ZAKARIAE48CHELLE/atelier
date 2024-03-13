import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumeComponent } from './forume.component';

describe('ForumeComponent', () => {
  let component: ForumeComponent;
  let fixture: ComponentFixture<ForumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForumeComponent]
    });
    fixture = TestBed.createComponent(ForumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
