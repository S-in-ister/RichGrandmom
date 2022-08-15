import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryComponent } from './account-transfer-every.component';

describe('AccountTransferEveryComponent', () => {
  let component: AccountTransferEveryComponent;
  let fixture: ComponentFixture<AccountTransferEveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
