import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingFaqOtherComponent } from './account-setting-faq-other.component';

describe('AccountSettingFaqOtherComponent', () => {
  let component: AccountSettingFaqOtherComponent;
  let fixture: ComponentFixture<AccountSettingFaqOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingFaqOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingFaqOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
