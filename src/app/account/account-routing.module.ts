import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AccountComponent } from './account.component';
import { AccountLoginComponent } from '../account-login/account-login.component';
import { AccountSignupComponent } from '../account-signup/account-signup.component';

const routes: Routes = [
  { path:'account', component: AccountComponent,
    children: [
      { path:'login', component: AccountLoginComponent },
      { path:'signup', component: AccountSignupComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
