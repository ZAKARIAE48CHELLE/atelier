import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationtreeComponent } from './organisationtree.component';

describe('OrganisationtreeComponent', () => {
  let component: OrganisationtreeComponent;
  let fixture: ComponentFixture<OrganisationtreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrganisationtreeComponent]
    });
    fixture = TestBed.createComponent(OrganisationtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
