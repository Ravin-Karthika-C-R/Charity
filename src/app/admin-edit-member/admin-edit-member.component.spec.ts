import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMemberComponent } from './admin-edit-member.component';

describe('AdminEditMemberComponent', () => {
  let component: AdminEditMemberComponent;
  let fixture: ComponentFixture<AdminEditMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
