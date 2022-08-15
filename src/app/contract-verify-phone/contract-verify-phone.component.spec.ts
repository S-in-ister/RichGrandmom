import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractVerifyPhoneComponent } from './contract-verify-phone.component';

describe('ContractVerifyPhoneComponent', () => {
  let component: ContractVerifyPhoneComponent;
  let fixture: ComponentFixture<ContractVerifyPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractVerifyPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractVerifyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
