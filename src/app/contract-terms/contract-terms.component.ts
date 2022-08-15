import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-terms',
  templateUrl: './contract-terms.component.html',
  styleUrls: ['./contract-terms.component.scss']
})
export class ContractTermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agree1() {
    let useCheck = document.getElementById('use') as HTMLInputElement;
    let content1 = document.getElementById('content1') as HTMLElement;

    content1.style['opacity'] = '0';
    content1.style['transform'] = 'scale(0)';
    content1.style['transition']= 'transform .5s ease-in, opacity .3s ease-in .3s';
    useCheck.checked = true;
    useCheck.disabled = false;

    console.log('123');

  }

  agree2() {
    let privacyCheck = document.getElementById('privacy') as HTMLInputElement;
    let content2 = document.getElementById('content2') as HTMLElement;

    content2.style['opacity'] = '0';
    content2.style['transform'] = 'scale(0)';
    content2.style['transition']= 'transform .5s ease-in, opacity .3s ease-in .3s';
    privacyCheck.checked = true;
    privacyCheck.disabled = false;
    console.log('123');
  }

}
