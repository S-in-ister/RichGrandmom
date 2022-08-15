import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeSettingKeyComponent } from './account-safe-setting-key.component';

describe('AccountSafeSettingKeyComponent', () => {
  let component: AccountSafeSettingKeyComponent;
  let fixture: ComponentFixture<AccountSafeSettingKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeSettingKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeSettingKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
