import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingFaqNormalComponent } from './account-setting-faq-normal.component';

describe('AccountSettingFaqNormalComponent', () => {
  let component: AccountSettingFaqNormalComponent;
  let fixture: ComponentFixture<AccountSettingFaqNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingFaqNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingFaqNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
