import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEserviceComponent } from './add-eservice.component';

describe('AddEserviceComponent', () => {
  let component: AddEserviceComponent;
  let fixture: ComponentFixture<AddEserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEserviceComponent]
    });
    fixture = TestBed.createComponent(AddEserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
