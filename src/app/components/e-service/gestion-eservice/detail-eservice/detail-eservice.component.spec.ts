import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEserviceComponent } from './detail-eservice.component';

describe('DetailEserviceComponent', () => {
  let component: DetailEserviceComponent;
  let fixture: ComponentFixture<DetailEserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailEserviceComponent]
    });
    fixture = TestBed.createComponent(DetailEserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
