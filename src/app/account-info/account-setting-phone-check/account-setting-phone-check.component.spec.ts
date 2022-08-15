import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingPhoneCheckComponent } from './account-setting-phone-check.component';

describe('AccountSettingPhoneCheckComponent', () => {
  let component: AccountSettingPhoneCheckComponent;
  let fixture: ComponentFixture<AccountSettingPhoneCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingPhoneCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingPhoneCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
