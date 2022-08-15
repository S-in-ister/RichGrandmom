import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGuardComponent } from './account-guard.component';

describe('AccountGuardComponent', () => {
  let component: AccountGuardComponent;
  let fixture: ComponentFixture<AccountGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
