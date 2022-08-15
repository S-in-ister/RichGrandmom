import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingEmailComponent } from './account-setting-email.component';

describe('AccountSettingEmailComponent', () => {
  let component: AccountSettingEmailComponent;
  let fixture: ComponentFixture<AccountSettingEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
