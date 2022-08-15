import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSafeFinishComponent } from './account-safe-finish.component';

describe('AccountSafeFinishComponent', () => {
  let component: AccountSafeFinishComponent;
  let fixture: ComponentFixture<AccountSafeFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSafeFinishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSafeFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
