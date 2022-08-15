import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountConsignmentComponent } from './account-consignment.component';

describe('AccountConsignmentComponent', () => {
  let component: AccountConsignmentComponent;
  let fixture: ComponentFixture<AccountConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountConsignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
