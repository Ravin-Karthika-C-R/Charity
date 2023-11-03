import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAppointmentformComponent } from './admin-manage-appointmentform.component';

describe('AdminManageAppointmentformComponent', () => {
  let component: AdminManageAppointmentformComponent;
  let fixture: ComponentFixture<AdminManageAppointmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageAppointmentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageAppointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
