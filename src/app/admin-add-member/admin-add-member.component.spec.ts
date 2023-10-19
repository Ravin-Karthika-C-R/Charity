import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMemberComponent } from './admin-add-member.component';

describe('AdminAddMemberComponent', () => {
  let component: AdminAddMemberComponent;
  let fixture: ComponentFixture<AdminAddMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
