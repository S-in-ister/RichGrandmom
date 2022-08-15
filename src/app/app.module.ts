import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QrCodeModule } from 'ng-qrcode';
import {CdkAccordionModule} from '@angular/cdk/accordion';



import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { ContractModule } from './contract/contract.module';

// Component
import { AppComponent } from './app.component';
import { ContractEnterPhoneComponent } from './contract-enter-phone/contract-enter-phone.component';
import { ContractVerifyPhoneComponent } from './contract-verify-phone/contract-verify-phone.component';
import { ContractEnterIdComponent } from './contract-enter-id/contract-enter-id.component';
import { ContractEnterInviteComponent } from './contract-enter-invite/contract-enter-invite.component';
import { ContractVerifyBankComponent } from './contract-verify-bank/contract-verify-bank.component';
import { ContractVerifyIdentityComponent } from './contract-verify-identity/contract-verify-identity.component';
import { ContractFillBasicInfoComponent } from './contract-fill-basic-info/contract-fill-basic-info.component';
import { ContractSetUserComponent } from './contract-set-user/contract-set-user.component';
import { ContractSignupFinishComponent } from './contract-signup-finish/contract-signup-finish.component';
import { AccountSafeComponent } from './safe/account-safe/account-safe.component';
import { AccountOverviewComponent } from './account-info/account-overview/account-overview.component';
import { AccountNavComponent } from './account-info/account-nav/account-nav.component';
import { AccountIndexComponent } from './account-info/account-index/account-index.component';
import { AccountMyComponent } from './account-info/account-my/account-my.component';
import { AccountConsignmentComponent } from './account-info/account-consignment/account-consignment.component';
import { AccountConsignmentWarnComponent } from './account-info/account-consignment-warn/account-consignment-warn.component';
import { AccountStatementComponent } from './account-info/account-statement/account-statement.component';
import { AccountSettingComponent } from './account-info/account-setting/account-setting.component';
import { AccountTransferComponent } from './account-info/account-transfer/account-transfer.component';
import { AccountTransferReceiveComponent } from './account-info/account-transfer-receive/account-transfer-receive.component';
import { AccountTransferCheckComponent } from './account-info/account-transfer-check/account-transfer-check.component';
import { AccountSettingBasicComponent } from './account-info/account-setting-basic/account-setting-basic.component';
import { AccountSettingPhoneComponent } from './account-info/account-setting-phone/account-setting-phone.component';
import { AccountSettingPhoneCheckComponent } from './account-info/account-setting-phone-check/account-setting-phone-check.component';
import { AccountSettingEmailComponent } from './account-info/account-setting-email/account-setting-email.component';
import { AccountSettingEmailCheckComponent } from './account-info/account-setting-email-check/account-setting-email-check.component';
import { AccountSettingFaqNormalComponent } from './account-info/account-setting-faq-normal/account-setting-faq-normal.component';
import { AccountSettingFaqOtherComponent } from './account-info/account-setting-faq-other/account-setting-faq-other.component';
import { AccountSettingFaqNormalAccountComponent } from './account-info/account-setting-faq-normal-account/account-setting-faq-normal-account.component';
import { AccountGuardComponent } from './account-info/account-guard/account-guard.component';
import { AccountSettingGuardComponent } from './account-info/account-setting-guard/account-setting-guard.component';
import { AccountFeedbackComponent } from './account-info/account-feedback/account-feedback.component';
import { AccountModifyUserIdComponent } from './account-info/account-modify-user-id/account-modify-user-id.component';
import { AccountModifyUserPasswordComponent } from './account-info/account-modify-user-password/account-modify-user-password.component';
import { AccountModifyUserIdNewComponent } from './account-info/account-modify-user-id-new/account-modify-user-id-new.component';
import { AccountModifyUserPasswordNewComponent } from './account-info/account-modify-user-password-new/account-modify-user-password-new.component';
import { AccountSettingSuccessComponent } from './account-info/account-setting-success/account-setting-success.component';
import { AccountSafeSettingKeyComponent } from './safe/account-safe-setting-key/account-safe-setting-key.component';
import { AccountSafeInputKeyComponent } from './safe/account-safe-input-key/account-safe-input-key.component';
import { AccountSafeSettingEmailComponent } from './safe/account-safe-setting-email/account-safe-setting-email.component';
import { AccountSafeInputEmailComponent } from './safe/account-safe-input-email/account-safe-input-email.component';
import { AccountSafeVerifyEmailComponent } from './safe/account-safe-verify-email/account-safe-verify-email.component';
import { AccountSafeFinishComponent } from './safe/account-safe-finish/account-safe-finish.component';
import { AccountTransferEveryComponent } from './account-transfer-every/account-transfer-every.component';
import { AccountTransferEveryAddComponent } from './account-transfer-every-add/account-transfer-every-add.component';
import { AccountTransferEveryEditComponent } from './account-transfer-every-edit/account-transfer-every-edit.component';
import { AccountTransferEveryAccountReviceComponent } from './account-transfer-every-account-revice/account-transfer-every-account-revice.component';
import { AccountTransferEveryReviceComponent } from './account-transfer-every-revice/account-transfer-every-revice.component';
import { AccountSettingTransferComponent } from './account-info/account-setting-transfer/account-setting-transfer.component';
import { AccountSettingNoticeComponent } from './account-info/account-setting-notice/account-setting-notice.component';
import { AccountGuardCheckComponent } from './account-info/account-guard-check/account-guard-check.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractEnterPhoneComponent,
    ContractVerifyPhoneComponent,
    ContractEnterIdComponent,
    ContractEnterInviteComponent,
    ContractVerifyBankComponent,
    ContractVerifyIdentityComponent,
    ContractFillBasicInfoComponent,
    ContractSetUserComponent,
    ContractSignupFinishComponent,
    AccountSafeComponent,
    AccountOverviewComponent,
    AccountNavComponent,
    AccountIndexComponent,
    AccountMyComponent,
    AccountConsignmentComponent,
    AccountConsignmentWarnComponent,
    AccountStatementComponent,
    AccountSettingComponent,
    AccountTransferComponent,
    AccountTransferReceiveComponent,
    AccountTransferCheckComponent,
    AccountSettingBasicComponent,
    AccountSettingPhoneComponent,
    AccountSettingPhoneCheckComponent,
    AccountSettingEmailComponent,
    AccountSettingEmailCheckComponent,
    AccountSettingFaqNormalComponent,
    AccountSettingFaqOtherComponent,
    AccountSettingFaqNormalAccountComponent,
    AccountGuardComponent,
    AccountSettingGuardComponent,
    AccountFeedbackComponent,
    AccountModifyUserIdComponent,
    AccountModifyUserPasswordComponent,
    AccountModifyUserIdNewComponent,
    AccountModifyUserPasswordNewComponent,
    AccountSettingSuccessComponent,
    AccountSafeSettingKeyComponent,
    AccountSafeInputKeyComponent,
    AccountSafeSettingEmailComponent,
    AccountSafeInputEmailComponent,
    AccountSafeVerifyEmailComponent,
    AccountSafeFinishComponent,
    AccountTransferEveryComponent,
    AccountTransferEveryAddComponent,
    AccountTransferEveryEditComponent,
    AccountTransferEveryAccountReviceComponent,
    AccountTransferEveryReviceComponent,
    AccountSettingTransferComponent,
    AccountSettingNoticeComponent,
    AccountGuardCheckComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QrCodeModule,
    FormsModule,
    ReactiveFormsModule,
    AccountModule,
    ContractModule,
    AppRoutingModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
