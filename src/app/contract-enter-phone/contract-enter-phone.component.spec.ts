import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEnterPhoneComponent } from './contract-enter-phone.component';

describe('ContractEnterPhoneComponent', () => {
  let component: ContractEnterPhoneComponent;
  let fixture: ComponentFixture<ContractEnterPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEnterPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractEnterPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
