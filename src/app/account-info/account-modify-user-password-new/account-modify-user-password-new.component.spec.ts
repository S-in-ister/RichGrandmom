import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModifyUserPasswordNewComponent } from './account-modify-user-password-new.component';

describe('AccountModifyUserPasswordNewComponent', () => {
  let component: AccountModifyUserPasswordNewComponent;
  let fixture: ComponentFixture<AccountModifyUserPasswordNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountModifyUserPasswordNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountModifyUserPasswordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
