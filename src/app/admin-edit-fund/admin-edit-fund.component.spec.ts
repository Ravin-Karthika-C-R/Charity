import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditFundComponent } from './admin-edit-fund.component';

describe('AdminEditFundComponent', () => {
  let component: AdminEditFundComponent;
  let fixture: ComponentFixture<AdminEditFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
