import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFundComponent } from './user-view-fund.component';

describe('UserViewFundComponent', () => {
  let component: UserViewFundComponent;
  let fixture: ComponentFixture<UserViewFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
