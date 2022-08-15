import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSignupFinishComponent } from './contract-signup-finish.component';

describe('ContractSignupFinishComponent', () => {
  let component: ContractSignupFinishComponent;
  let fixture: ComponentFixture<ContractSignupFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractSignupFinishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSignupFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
