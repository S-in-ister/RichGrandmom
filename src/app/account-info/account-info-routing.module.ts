import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AccountNavComponent } from '../account-info/account-nav/account-nav.component';
import { AccountIndexComponent } from './../account-info/account-index/account-index.component';
import { AccountConsignmentComponent } from './account-consignment/account-consignment.component';
import { AccountConsignmentWarnComponent } from './account-consignment-warn/account-consignment-warn.component';
import { AccountMyComponent } from './account-my/account-my.component';
import { AccountOverviewComponent } from './../account-info/account-overview/account-overview.component';

const routes: Routes = [
  // { path:'account-nav', component: AccountNavComponent,
  // children: [
  //   { path:'index', component: AccountIndexComponent },
  //   { path:'consignment', component: AccountConsignmentComponent },
  //   { path:'consignment-warn', component: AccountConsignmentWarnComponent },
  //   { path:'my', component: AccountMyComponent },
  //   { path:'overview', component: AccountOverviewComponent },
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AccountInfoRoutingModule { }
