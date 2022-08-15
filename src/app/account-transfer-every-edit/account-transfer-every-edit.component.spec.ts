import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferEveryEditComponent } from './account-transfer-every-edit.component';

describe('AccountTransferEveryEditComponent', () => {
  let component: AccountTransferEveryEditComponent;
  let fixture: ComponentFixture<AccountTransferEveryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransferEveryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransferEveryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
