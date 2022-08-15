import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountModifyUserIdComponent } from './account-modify-user-id.component';

describe('AccountModifyUserIdComponent', () => {
  let component: AccountModifyUserIdComponent;
  let fixture: ComponentFixture<AccountModifyUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountModifyUserIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountModifyUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
