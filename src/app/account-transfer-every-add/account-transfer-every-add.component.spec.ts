import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryAddComponent } from './account-transfer-every-add.component';

describe('AccountTransferEveryAddComponent', () => {
  let component: AccountTransferEveryAddComponent;
  let fixture: ComponentFixture<AccountTransferEveryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
