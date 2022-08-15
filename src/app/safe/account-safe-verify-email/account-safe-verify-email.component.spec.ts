import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeVerifyEmailComponent } from './account-safe-verify-email.component';

describe('AccountSafeVerifyEmailComponent', () => {
  let component: AccountSafeVerifyEmailComponent;
  let fixture: ComponentFixture<AccountSafeVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeVerifyEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
