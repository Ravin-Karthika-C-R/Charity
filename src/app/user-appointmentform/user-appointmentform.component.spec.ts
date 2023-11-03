import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppointmentformComponent } from './user-appointmentform.component';

describe('UserAppointmentformComponent', () => {
  let component: UserAppointmentformComponent;
  let fixture: ComponentFixture<UserAppointmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppointmentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
