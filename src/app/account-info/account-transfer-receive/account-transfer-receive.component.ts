import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-transfer-receive',
  templateUrl: './account-transfer-receive.component.html',
  styleUrls: ['./account-transfer-receive.component.scss']
})
export class AccountTransferReceiveComponent implements OnInit {

  QrCodeAccount: any = 'hello world!' + '?' + Math.random();

  constructor() { }

  ngOnInit(): void {
  }

}
