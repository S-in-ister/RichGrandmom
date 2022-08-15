import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingBasicComponent } from './account-setting-basic.component';

describe('AccountSettingBasicComponent', () => {
  let component: AccountSettingBasicComponent;
  let fixture: ComponentFixture<AccountSettingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
