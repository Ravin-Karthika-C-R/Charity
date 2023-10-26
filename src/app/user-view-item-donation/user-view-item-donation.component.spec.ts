import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewItemDonationComponent } from './user-view-item-donation.component';

describe('UserViewItemDonationComponent', () => {
  let component: UserViewItemDonationComponent;
  let fixture: ComponentFixture<UserViewItemDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewItemDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewItemDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
