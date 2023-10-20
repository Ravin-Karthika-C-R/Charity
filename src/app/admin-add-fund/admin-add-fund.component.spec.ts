import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFundComponent } from './admin-add-fund.component';

describe('AdminAddFundComponent', () => {
  let component: AdminAddFundComponent;
  let fixture: ComponentFixture<AdminAddFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
