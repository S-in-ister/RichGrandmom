import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEnterInviteComponent } from './contract-enter-invite.component';

describe('ContractEnterInviteComponent', () => {
  let component: ContractEnterInviteComponent;
  let fixture: ComponentFixture<ContractEnterInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractEnterInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractEnterInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
