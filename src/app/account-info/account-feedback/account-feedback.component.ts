import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-feedback',
  templateUrl: './account-feedback.component.html',
  styleUrls: ['./account-feedback.component.scss']
})
export class AccountFeedbackComponent implements OnInit {

  one: boolean = true;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;
  five: boolean = false;

  one_img: string = './assets/icon/icon_One_dynamic.png';
  two_img: string = './assets/icon/icon_Two_dynamic.png';
  three_img: string = './assets/icon/icon_Three_dynamic.png';
  four_img: string = './assets/icon/icon_Four_dynamic.png';
  five_img: string = './assets/icon/icon_Five_dynamic.png';

  constructor() { }

  ngOnInit(): void {
  }

  oneStar() {
    this.one = true;
    this.two = false;
    this.three = false;
    this.four = false;
    this.five = false;
    this.one_img = this.one_img + '?' + Math.random();
    this.two_img = this.two_img + '?' + Math.random();
    this.three_img = this.three_img + '?' + Math.random();
    this.four_img = this.four_img + '?' + Math.random();
    this.five_img = this.five_img + '?' + Math.random();
  }

  twoStar() {
    this.one = true;
    this.two = true;
    this.three = false;
    this.four = false;
    this.five = false;
    this.two_img = this.two_img + '?' + Math.random();
    this.three_img = this.three_img + '?' + Math.random();
    this.four_img = this.four_img + '?' + Math.random();
    this.five_img = this.five_img + '?' + Math.random();
  }

  threeStar() {
    this.one = true;
    this.two = true;
    this.three = true;
    this.four = false;
    this.five = false;
    this.three_img = this.three_img + '?' + Math.random();
    this.four_img = this.four_img + '?' + Math.random();
    this.five_img = this.five_img + '?' + Math.random();
  }

  fourStar() {
    this.one = true;
    this.two = true;
    this.three = true;
    this.four = true;
    this.five = false
    this.four_img = this.four_img + '?' + Math.random();
    this.five_img = this.five_img + '?' + Math.random();
  }

  fiveStar() {
    this.one = true;
    this.two = true;
    this.three = true;
    this.four = true;
    this.five = !this.five;
    this.five_img = this.five_img + '?' + Math.random();
  }

}
