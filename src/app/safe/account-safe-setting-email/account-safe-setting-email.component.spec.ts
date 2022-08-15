import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeSettingEmailComponent } from './account-safe-setting-email.component';

describe('AccountSafeSettingEmailComponent', () => {
  let component: AccountSafeSettingEmailComponent;
  let fixture: ComponentFixture<AccountSafeSettingEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeSettingEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeSettingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
