import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewMemberComponent } from './admin-view-member.component';

describe('AdminViewMemberComponent', () => {
  let component: AdminViewMemberComponent;
  let fixture: ComponentFixture<AdminViewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
