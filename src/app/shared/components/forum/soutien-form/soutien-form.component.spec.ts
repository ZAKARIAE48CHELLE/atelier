import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienFormComponent } from './soutien-form.component';

describe('SoutienFormComponent', () => {
  let component: SoutienFormComponent;
  let fixture: ComponentFixture<SoutienFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SoutienFormComponent]
    });
    fixture = TestBed.createComponent(SoutienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
