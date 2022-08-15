import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';

import { AccountConsignmentWarnComponent } from '../account-info/account-consignment-warn/account-consignment-warn.component';
import { AccountConsignmentComponent } from '../account-info/account-consignment/account-consignment.component';
import { AccountOverviewComponent } from '../account-info/account-overview/account-overview.component';
import { AccountMyComponent } from '../account-info/account-my/account-my.component';
import { AccountIndexComponent } from '../account-info/account-index/account-index.component';
import { AccountNavComponent } from '../account-info/account-nav/account-nav.component';
// import { AccountSettingNoticeComponent } from './account-setting-notice/account-setting-notice.component';
// import { AccountSettingTransferComponent } from './account-setting-transfer/account-setting-transfer.component';

@NgModule({
  declarations: [
    // AccountNavComponent,
    // AccountIndexComponent,
    // AccountConsignmentComponent,
    // AccountConsignmentWarnComponent,
    // AccountMyComponent,
    // AccountOverviewComponent

    // AccountSettingNoticeComponent,
    // AccountSettingTransferComponent
  ],
  imports: [
    CommonModule,
    // AccountInfoRoutingModule
  ],
  exports: [
    // AccountNavComponent
  ]
})
export class AccountInfoModule { }
