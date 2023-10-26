import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewUserfunddetailsComponent } from './admin-view-userfunddetails.component';

describe('AdminViewUserfunddetailsComponent', () => {
  let component: AdminViewUserfunddetailsComponent;
  let fixture: ComponentFixture<AdminViewUserfunddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewUserfunddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewUserfunddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
