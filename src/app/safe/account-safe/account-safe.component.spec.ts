import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeComponent } from './account-safe.component';

describe('AccountSafeComponent', () => {
  let component: AccountSafeComponent;
  let fixture: ComponentFixture<AccountSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
