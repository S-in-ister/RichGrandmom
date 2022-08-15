import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingTransferComponent } from './account-setting-transfer.component';

describe('AccountSettingTransferComponent', () => {
  let component: AccountSettingTransferComponent;
  let fixture: ComponentFixture<AccountSettingTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
