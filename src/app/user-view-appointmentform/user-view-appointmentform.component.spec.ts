import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAppointmentformComponent } from './user-view-appointmentform.component';

describe('UserViewAppointmentformComponent', () => {
  let component: UserViewAppointmentformComponent;
  let fixture: ComponentFixture<UserViewAppointmentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAppointmentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewAppointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
