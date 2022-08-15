import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingGuardComponent } from './account-setting-guard.component';

describe('AccountSettingGuardComponent', () => {
  let component: AccountSettingGuardComponent;
  let fixture: ComponentFixture<AccountSettingGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
