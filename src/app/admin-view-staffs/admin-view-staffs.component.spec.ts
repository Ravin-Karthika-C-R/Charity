import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewStaffsComponent } from './admin-view-staffs.component';

describe('AdminViewStaffsComponent', () => {
  let component: AdminViewStaffsComponent;
  let fixture: ComponentFixture<AdminViewStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewStaffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
