import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ContractComponent } from './contract.component';
import { ContractTermsComponent } from '../contract-terms/contract-terms.component';
import { ContractSignupFinishComponent } from './../contract-signup-finish/contract-signup-finish.component';
import { ContractSetUserComponent } from './../contract-set-user/contract-set-user.component';
import { ContractFillBasicInfoComponent } from './../contract-fill-basic-info/contract-fill-basic-info.component';
import { ContractVerifyIdentityComponent } from './../contract-verify-identity/contract-verify-identity.component';
import { ContractVerifyBankComponent } from './../contract-verify-bank/contract-verify-bank.component';
import { ContractEnterInviteComponent } from './../contract-enter-invite/contract-enter-invite.component';
import { ContractEnterIdComponent } from './../contract-enter-id/contract-enter-id.component';
import { ContractVerifyPhoneComponent } from './../contract-verify-phone/contract-verify-phone.component';
import { ContractEnterPhoneComponent } from './../contract-enter-phone/contract-enter-phone.component';

const routes: Routes = [
  { path: 'contract', component: ContractComponent,
    children: [
      { path:'', component: ContractTermsComponent },
      { path:'terms', component: ContractTermsComponent },
      { path:'enter-phone', component: ContractEnterPhoneComponent },
      { path:'verify-phone', component: ContractVerifyPhoneComponent },
      { path:'enter-id', component: ContractEnterIdComponent},
      { path:'enter-invite', component: ContractEnterInviteComponent },
      { path:'verify-bank', component: ContractVerifyBankComponent },
      { path:'verify-identity', component: ContractVerifyIdentityComponent },
      { path:'set-user', component: ContractSetUserComponent },
      { path:'fill-basic-info', component: ContractFillBasicInfoComponent },
      { path:'signup-finish', component: ContractSignupFinishComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
