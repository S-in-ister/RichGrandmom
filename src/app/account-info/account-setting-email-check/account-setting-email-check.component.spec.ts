import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingEmailCheckComponent } from './account-setting-email-check.component';

describe('AccountSettingEmailCheckComponent', () => {
  let component: AccountSettingEmailCheckComponent;
  let fixture: ComponentFixture<AccountSettingEmailCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingEmailCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingEmailCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
