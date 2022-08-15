import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEnterIdComponent } from './contract-enter-id.component';

describe('ContractEnterIdComponent', () => {
  let component: ContractEnterIdComponent;
  let fixture: ComponentFixture<ContractEnterIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEnterIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractEnterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
