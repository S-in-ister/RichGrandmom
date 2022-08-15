import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGuardCheckComponent } from './account-guard-check.component';

describe('AccountGuardCheckComponent', () => {
  let component: AccountGuardCheckComponent;
  let fixture: ComponentFixture<AccountGuardCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountGuardCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGuardCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
