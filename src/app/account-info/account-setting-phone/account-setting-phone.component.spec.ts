import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingPhoneComponent } from './account-setting-phone.component';

describe('AccountSettingPhoneComponent', () => {
  let component: AccountSettingPhoneComponent;
  let fixture: ComponentFixture<AccountSettingPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
