import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';

// Component
import { ContractComponent } from './contract.component';
import { ContractTermsComponent } from '../contract-terms/contract-terms.component';

@NgModule({
  declarations: [
    ContractComponent,
    ContractTermsComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ],
  exports: [
    ContractComponent
  ]
})
export class ContractModule { }
