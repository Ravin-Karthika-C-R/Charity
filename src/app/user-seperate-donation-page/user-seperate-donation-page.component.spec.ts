import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeperateDonationPageComponent } from './user-seperate-donation-page.component';

describe('UserSeperateDonationPageComponent', () => {
  let component: UserSeperateDonationPageComponent;
  let fixture: ComponentFixture<UserSeperateDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSeperateDonationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSeperateDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
