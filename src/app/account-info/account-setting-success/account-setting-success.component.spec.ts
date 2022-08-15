import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingSuccessComponent } from './account-setting-success.component';

describe('AccountSettingSuccessComponent', () => {
  let component: AccountSettingSuccessComponent;
  let fixture: ComponentFixture<AccountSettingSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
