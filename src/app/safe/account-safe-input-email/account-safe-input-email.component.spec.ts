import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeInputEmailComponent } from './account-safe-input-email.component';

describe('AccountSafeInputEmailComponent', () => {
  let component: AccountSafeInputEmailComponent;
  let fixture: ComponentFixture<AccountSafeInputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeInputEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
