import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferReceiveComponent } from './account-transfer-receive.component';

describe('AccountTransferReceiveComponent', () => {
  let component: AccountTransferReceiveComponent;
  let fixture: ComponentFixture<AccountTransferReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferReceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
