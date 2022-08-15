import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

// Component
import { AccountComponent } from './account.component';
import { AccountLoginComponent } from './../account-login/account-login.component';
import { AccountSignupComponent } from '../account-signup/account-signup.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountLoginComponent,
    AccountSignupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
