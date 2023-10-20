import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFundComponent } from './admin-view-fund.component';

describe('AdminViewFundComponent', () => {
  let component: AdminViewFundComponent;
  let fixture: ComponentFixture<AdminViewFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
