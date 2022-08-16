import { AccountGuardCheckComponent } from './account-info/account-guard-check/account-guard-check.component';
import { AccountTransferEveryReviceComponent } from './account-transfer-every-revice/account-transfer-every-revice.component';
import { AccountTransferEveryAddComponent } from './account-transfer-every-add/account-transfer-every-add.component';
import { AccountTransferEveryEditComponent } from './account-transfer-every-edit/account-transfer-every-edit.component';
import { AccountTransferEveryComponent } from './account-transfer-every/account-transfer-every.component';
import { AccountSafeSettingEmailComponent } from './safe/account-safe-setting-email/account-safe-setting-email.component';
import { AccountSafeFinishComponent } from './safe/account-safe-finish/account-safe-finish.component';
import { AccountSafeVerifyEmailComponent } from './safe/account-safe-verify-email/account-safe-verify-email.component';
import { AccountSafeInputEmailComponent } from './safe/account-safe-input-email/account-safe-input-email.component';
import { AccountSafeSettingKeyComponent } from './safe/account-safe-setting-key/account-safe-setting-key.component';
import { AccountSafeInputKeyComponent } from './safe/account-safe-input-key/account-safe-input-key.component';
import { AccountSafeComponent } from './safe/account-safe/account-safe.component';
import { AccountSettingSuccessComponent } from './account-info/account-setting-success/account-setting-success.component';
import { AccountModifyUserPasswordComponent } from './account-info/account-modify-user-password/account-modify-user-password.component';
import { AccountModifyUserPasswordNewComponent } from './account-info/account-modify-user-password-new/account-modify-user-password-new.component';
import { AccountModifyUserIdComponent } from './account-info/account-modify-user-id/account-modify-user-id.component';
import { AccountModifyUserIdNewComponent } from './account-info/account-modify-user-id-new/account-modify-user-id-new.component';
import { AccountFeedbackComponent } from './account-info/account-feedback/account-feedback.component';
import { AccountGuardComponent } from './account-info/account-guard/account-guard.component';
import { AccountSettingGuardComponent } from './account-info/account-setting-guard/account-setting-guard.component';
import { AccountSettingFaqNormalAccountComponent } from './account-info/account-setting-faq-normal-account/account-setting-faq-normal-account.component';
import { AccountSettingFaqOtherComponent } from './account-info/account-setting-faq-other/account-setting-faq-other.component';
import { AccountSettingFaqNormalComponent } from './account-info/account-setting-faq-normal/account-setting-faq-normal.component';
import { AccountSettingEmailCheckComponent } from './account-info/account-setting-email-check/account-setting-email-check.component';
import { AccountSettingEmailComponent } from './account-info/account-setting-email/account-setting-email.component';
import { AccountSettingPhoneCheckComponent } from './account-info/account-setting-phone-check/account-setting-phone-check.component';
import { AccountSettingPhoneComponent } from './account-info/account-setting-phone/account-setting-phone.component';
import { AccountSettingBasicComponent } from './account-info/account-setting-basic/account-setting-basic.component';
import { AccountSettingTransferComponent } from './account-info/account-setting-transfer/account-setting-transfer.component';
import { AccountSettingNoticeComponent } from './account-info/account-setting-notice/account-setting-notice.component';
import { AccountTransferCheckComponent } from './account-info/account-transfer-check/account-transfer-check.component';
import { AccountTransferReceiveComponent } from './account-info/account-transfer-receive/account-transfer-receive.component';
import { AccountTransferComponent } from './account-info/account-transfer/account-transfer.component';
import { AccountSettingComponent } from './account-info/account-setting/account-setting.component';
import { AccountStatementComponent } from './account-info/account-statement/account-statement.component';
import { AccountConsignmentWarnComponent } from './account-info/account-consignment-warn/account-consignment-warn.component';
import { AccountConsignmentComponent } from './account-info/account-consignment/account-consignment.component';
import { AccountOverviewComponent } from './account-info/account-overview/account-overview.component';
import { AccountMyComponent } from './account-info/account-my/account-my.component';
import { AccountIndexComponent } from './account-info/account-index/account-index.component';
import { AccountNavComponent } from './account-info/account-nav/account-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path:'account-nav', component: AccountNavComponent,
    children: [
      { path:'index', component: AccountIndexComponent, data: {animation: "one"} },
      { path:'consignment', component: AccountConsignmentComponent, data: {animation: "two"}  },
      { path:'consignment-warn', component: AccountConsignmentWarnComponent },
      { path:'transfer', component: AccountTransferComponent },
      { path:'transfer-every', component: AccountTransferEveryComponent },
      { path:'transfer-edit', component: AccountTransferEveryEditComponent },
      { path:'transfer-add', component: AccountTransferEveryAddComponent },
      { path:'transfer-revice', component: AccountTransferEveryReviceComponent },
      { path:'transfer-receive', component: AccountTransferReceiveComponent },
      { path:'transfer-check', component: AccountTransferCheckComponent },
      { path:'statement', component: AccountStatementComponent },
      { path:'my', component: AccountMyComponent },
      { path:'overview', component: AccountOverviewComponent },
      { path:'setting', component: AccountSettingComponent },
      { path:'setting-notice', component: AccountSettingNoticeComponent },
      { path:'setting-transfer', component: AccountSettingTransferComponent },
      { path:'setting-basic', component: AccountSettingBasicComponent },
      { path:'setting-phone', component: AccountSettingPhoneComponent },
      { path:'setting-phone-check', component: AccountSettingPhoneCheckComponent },
      { path:'setting-email', component: AccountSettingEmailComponent },
      { path:'setting-email-check', component: AccountSettingEmailCheckComponent },
      { path:'setting-guard', component: AccountSettingGuardComponent },
      { path:'setting-faq-normal', component: AccountSettingFaqNormalComponent },
      { path:'setting-faq-normal-account', component: AccountSettingFaqNormalAccountComponent },
      { path:'setting-faq-other', component: AccountSettingFaqOtherComponent },
      { path:'modify-user-id', component: AccountModifyUserIdComponent },
      { path:'modify-user-id-new', component: AccountModifyUserIdNewComponent },
      { path:'modify-user-password', component: AccountModifyUserPasswordComponent },
      { path:'modify-user-password-new', component: AccountModifyUserPasswordNewComponent },
      { path:'feedback', component: AccountFeedbackComponent },
    ]},
    { path:'account-safe', component: AccountSafeComponent },
    { path:'account-guard', component: AccountGuardComponent },
    { path:'account-guard-check', component: AccountGuardCheckComponent },
    { path:'account-setting-success', component: AccountSettingSuccessComponent },
    { path:'account-safe', component: AccountSafeComponent,
      children: [
        { path:'input-key', component: AccountSafeInputKeyComponent },
        { path:'setting-key', component: AccountSafeSettingKeyComponent },
        { path:'input-email', component: AccountSafeInputEmailComponent },
        { path:'setting-email', component: AccountSafeSettingEmailComponent },
        { path:'verify-email', component: AccountSafeVerifyEmailComponent },
        { path:'finish', component: AccountSafeFinishComponent }
      ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
