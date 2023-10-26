import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDonatePageComponent } from './user-donate-page.component';

describe('UserDonatePageComponent', () => {
  let component: UserDonatePageComponent;
  let fixture: ComponentFixture<UserDonatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDonatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDonatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
