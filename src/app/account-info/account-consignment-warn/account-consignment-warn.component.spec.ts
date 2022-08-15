import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConsignmentWarnComponent } from './account-consignment-warn.component';

describe('AccountConsignmentWarnComponent', () => {
  let component: AccountConsignmentWarnComponent;
  let fixture: ComponentFixture<AccountConsignmentWarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountConsignmentWarnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountConsignmentWarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
