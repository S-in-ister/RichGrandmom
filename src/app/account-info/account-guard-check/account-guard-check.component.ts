import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-guard-check',
  templateUrl: './account-guard-check.component.html',
  styleUrls: ['./account-guard-check.component.scss']
})
export class AccountGuardCheckComponent implements OnInit {

  num = Math.floor(Math.random() * 100);
  num0 = (this.num + 1) % 10;
  num1 = (this.num + 9) % 10;
  num2 = (this.num + 4) % 10;
  num3 = (this.num + 5) % 10;
  num4 = (this.num + 2) % 10;
  num5 = (this.num + 7) % 10;
  num6 = (this.num + 10) % 10;
  num7 = (this.num + 6) % 10;
  num8 = (this.num + 3) % 10;
  num9 = (this.num + 8) % 10;

  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;
  status10: boolean = false;

  passwordArray:any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // 陣列轉字串
  arrayJoin() {
    if(this.passwordArray.length > 5) {
      let password = this.passwordArray.join('');
      console.log(password);

      this.router.navigate(['account-setting-success']);
    }

    // 顯示 RICH99
    let i = this.passwordArray.length - 1;

    if( i < 6 ) {
      let open: any = document.getElementsByClassName('show-item');
      open[i].id = 'open' + (i + 1);
      i = i + 1;
    }
  }

  del() {
    let i = this.passwordArray.length;

    if(i < 6) {
      let close: any = document.getElementById('open' + i);
      close.id = 'close';
      i = i - 1;
      this.passwordArray.pop();
    }
  }

  clickEvent1() {
    this.status1 = !this.status1;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[0].id);

    this.arrayJoin();
  }

  clickEvent2() {
    this.status2 = !this.status2;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[1].id);

    this.arrayJoin();
  }

  clickEvent3() {
    this.status3 = !this.status3;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[2].id);

    this.arrayJoin();
  }

  clickEvent4() {
    this.status4 = !this.status4;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[3].id);

    this.arrayJoin();
  }

  clickEvent5() {
    this.status5 = !this.status5;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[4].id);

    this.arrayJoin();
  }

  clickEvent6() {
    this.status6 = !this.status6;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[5].id);

    this.arrayJoin();
  }

  clickEvent7() {
    this.status7 = !this.status7;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[6].id);

    this.arrayJoin();
  }

  clickEvent8() {
    this.status8 = !this.status8;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[7].id);

    this.arrayJoin();
  }

  clickEvent9() {
    this.status9 = !this.status9;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[8].id);

    this.arrayJoin();
  }

  clickEvent10() {
    this.status10 = !this.status10;
    let passwordNum: any = document.getElementsByClassName('value');
    this.passwordArray.push(passwordNum[9].id);

    this.arrayJoin();
  }

}
