import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contract-verify-bank',
  templateUrl: './contract-verify-bank.component.html',
  styleUrls: ['./contract-verify-bank.component.scss']
})
export class ContractVerifyBankComponent implements OnInit {

  imgUrl: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  fileChange(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let imgUrl = window.URL.createObjectURL(file);
    console.log(imgUrl);
    let sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl);
    console.log(sanitizerUrl)
    this.imgUrl = sanitizerUrl;
    console.log(imgUrl);
  }

}
