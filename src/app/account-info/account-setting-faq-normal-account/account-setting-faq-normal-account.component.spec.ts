import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingFaqNormalAccountComponent } from './account-setting-faq-normal-account.component';

describe('AccountSettingFaqNormalAccountComponent', () => {
  let component: AccountSettingFaqNormalAccountComponent;
  let fixture: ComponentFixture<AccountSettingFaqNormalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingFaqNormalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingFaqNormalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
