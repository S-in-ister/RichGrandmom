import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeInputKeyComponent } from './account-safe-input-key.component';

describe('AccountSafeInputKeyComponent', () => {
  let component: AccountSafeInputKeyComponent;
  let fixture: ComponentFixture<AccountSafeInputKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeInputKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeInputKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
