import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFillBasicInfoComponent } from './contract-fill-basic-info.component';

describe('ContractFillBasicInfoComponent', () => {
  let component: ContractFillBasicInfoComponent;
  let fixture: ComponentFixture<ContractFillBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractFillBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractFillBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
