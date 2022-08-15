import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferCheckComponent } from './account-transfer-check.component';

describe('AccountTransferCheckComponent', () => {
  let component: AccountTransferCheckComponent;
  let fixture: ComponentFixture<AccountTransferCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
