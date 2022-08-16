import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss']
})
export class AccountNavComponent implements OnInit {

  home: boolean = true;
  consignment: boolean = false;
  pay: boolean = false;
  details: boolean = false;
  member: boolean = false;

  home_img: string = './assets/icon/icon_Home_dynamic.png';
  consignment_img: string = './assets/icon/icon_Consignment_dynamic.png';
  pay_img: string = './assets/icon/icon_Pay_dynamic.png';
  details_img: string = './assets/icon/icon_Details_dynamic.png';
  member_img: string = './assets/icon/icon_member_dynamic.png';


  constructor(
  ) { }

  ngOnInit(): void {}

  onHome() {
    this.home = true;
    this.consignment = false;
    this.pay = false;
    this.details = false;
    this.member = false;
    this.home_img = this.home_img + '?' + Math.random();
    this.consignment_img = this.consignment_img + '?' + Math.random();
    this.pay_img = this.pay_img + '?' + Math.random();
    this.details_img = this.details_img + '?' + Math.random();
    this.member_img = this.member_img + '?' + Math.random();
  }

  onConsignment() {
    this.home = false;
    this.consignment = true;
    this.pay = false;
    this.details = false;
    this.member = false;
    this.home_img = this.home_img + '?' + Math.random();
    this.consignment_img = this.consignment_img + '?' + Math.random();
    this.pay_img = this.pay_img + '?' + Math.random();
    this.details_img = this.details_img + '?' + Math.random();
    this.member_img = this.member_img + '?' + Math.random();
  }

  onPay() {
    this.home = false;
    this.consignment = false;
    this.pay = true;
    this.details = false;
    this.member = false;
    this.home_img = this.home_img + '?' + Math.random();
    this.consignment_img = this.consignment_img + '?' + Math.random();
    this.pay_img = this.pay_img + '?' + Math.random();
    this.details_img = this.details_img + '?' + Math.random();
    this.member_img = this.member_img + '?' + Math.random();
  }

  onDetails() {
    this.home = false;
    this.consignment = false;
    this.pay = false;
    this.details = true;
    this.member = false;
    this.home_img = this.home_img + '?' + Math.random();
    this.consignment_img = this.consignment_img + '?' + Math.random();
    this.pay_img = this.pay_img + '?' + Math.random();
    this.details_img = this.details_img + '?' + Math.random();
    this.member_img = this.member_img + '?' + Math.random();
  }

  onMember() {
    this.home = false;
    this.consignment = false;
    this.pay = false;
    this.details = false;
    this.member = true;
    this.home_img = this.home_img + '?' + Math.random();
    this.consignment_img = this.consignment_img + '?' + Math.random();
    this.pay_img = this.pay_img + '?' + Math.random();
    this.details_img = this.details_img + '?' + Math.random();
    this.member_img = this.member_img + '?' + Math.random();
  }

  choose(target: any) {
    // target = true;
    console.log(target);

  }

}
