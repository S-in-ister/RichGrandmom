import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion'


@Component({
  selector: 'app-account-setting-faq-normal-account',
  templateUrl: './account-setting-faq-normal-account.component.html',
  styleUrls: ['./account-setting-faq-normal-account.component.scss']
})
export class AccountSettingFaqNormalAccountComponent implements OnInit {
  items = ['如何建立富奶奶帳戶?', '外籍人士可以申請富奶奶帳戶?', '外籍人士可以申請富奶奶帳戶?', '可以開立幾個富奶奶帳戶?'];
  // index = [1, 2, 3, 4]
  expandedIndex = 1;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
