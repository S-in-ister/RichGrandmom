import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractVerifyIdentityComponent } from './contract-verify-identity.component';

describe('ContractVerifyIdentityComponent', () => {
  let component: ContractVerifyIdentityComponent;
  let fixture: ComponentFixture<ContractVerifyIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractVerifyIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractVerifyIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
