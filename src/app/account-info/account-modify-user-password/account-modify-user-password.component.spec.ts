import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModifyUserPasswordComponent } from './account-modify-user-password.component';

describe('AccountModifyUserPasswordComponent', () => {
  let component: AccountModifyUserPasswordComponent;
  let fixture: ComponentFixture<AccountModifyUserPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountModifyUserPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountModifyUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
