import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingNoticeComponent } from './account-setting-notice.component';

describe('AccountSettingNoticeComponent', () => {
  let component: AccountSettingNoticeComponent;
  let fixture: ComponentFixture<AccountSettingNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
