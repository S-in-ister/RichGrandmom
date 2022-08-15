import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMyComponent } from './account-my.component';

describe('AccountMyComponent', () => {
  let component: AccountMyComponent;
  let fixture: ComponentFixture<AccountMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
