import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDonationsComponent } from './admin-view-donations.component';

describe('AdminViewDonationsComponent', () => {
  let component: AdminViewDonationsComponent;
  let fixture: ComponentFixture<AdminViewDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
