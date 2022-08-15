import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModifyUserIdNewComponent } from './account-modify-user-id-new.component';

describe('AccountModifyUserIdNewComponent', () => {
  let component: AccountModifyUserIdNewComponent;
  let fixture: ComponentFixture<AccountModifyUserIdNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountModifyUserIdNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountModifyUserIdNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
