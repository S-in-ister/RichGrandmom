import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSetUserComponent } from './contract-set-user.component';

describe('ContractSetUserComponent', () => {
  let component: ContractSetUserComponent;
  let fixture: ComponentFixture<ContractSetUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractSetUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
