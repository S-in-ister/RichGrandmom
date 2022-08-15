import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contract-verify-identity',
  templateUrl: './contract-verify-identity.component.html',
  styleUrls: ['./contract-verify-identity.component.scss']
})
export class ContractVerifyIdentityComponent implements OnInit {

  imgUrl1: any;
  imgUrl2: any;
  imgUrl3: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  fileChange01(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let imgUrl1 = window.URL.createObjectURL(file);
    console.log(imgUrl1);
    let sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl1);
    console.log(sanitizerUrl)
    this.imgUrl1 = sanitizerUrl;
    console.log(imgUrl1);
  }

  fileChange02(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let imgUrl2 = window.URL.createObjectURL(file);
    console.log(imgUrl2);
    let sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl2);
    console.log(sanitizerUrl)
    this.imgUrl2 = sanitizerUrl;
    console.log(imgUrl2);
  }

  fileChange03(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let imgUrl3 = window.URL.createObjectURL(file);
    console.log(imgUrl3);
    let sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl3);
    console.log(sanitizerUrl)
    this.imgUrl3 = sanitizerUrl;
    console.log(imgUrl3);
  }

}
