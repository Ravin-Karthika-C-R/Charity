import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStaffsComponent } from './admin-add-staffs.component';

describe('AdminAddStaffsComponent', () => {
  let component: AdminAddStaffsComponent;
  let fixture: ComponentFixture<AdminAddStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddStaffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
