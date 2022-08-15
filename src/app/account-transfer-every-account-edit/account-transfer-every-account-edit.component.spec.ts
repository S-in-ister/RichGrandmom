import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryAccountEditComponent } from './account-transfer-every-account-edit.component';

describe('AccountTransferEveryAccountEditComponent', () => {
  let component: AccountTransferEveryAccountEditComponent;
  let fixture: ComponentFixture<AccountTransferEveryAccountEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryAccountEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryAccountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
