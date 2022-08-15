import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryReviceComponent } from './account-transfer-every-revice.component';

describe('AccountTransferEveryReviceComponent', () => {
  let component: AccountTransferEveryReviceComponent;
  let fixture: ComponentFixture<AccountTransferEveryReviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryReviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryReviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
