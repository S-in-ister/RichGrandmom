import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractVerifyBankComponent } from './contract-verify-bank.component';

describe('ContractVerifyBankComponent', () => {
  let component: ContractVerifyBankComponent;
  let fixture: ComponentFixture<ContractVerifyBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractVerifyBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractVerifyBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
