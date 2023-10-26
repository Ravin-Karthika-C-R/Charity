import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormDonationComponent } from './user-form-donation.component';

describe('UserFormDonationComponent', () => {
  let component: UserFormDonationComponent;
  let fixture: ComponentFixture<UserFormDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
