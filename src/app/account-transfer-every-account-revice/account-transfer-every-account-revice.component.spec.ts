import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryAccountReviceComponent } from './account-transfer-every-account-revice.component';

describe('AccountTransferEveryAccountReviceComponent', () => {
  let component: AccountTransferEveryAccountReviceComponent;
  let fixture: ComponentFixture<AccountTransferEveryAccountReviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryAccountReviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryAccountReviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
