import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-my',
  templateUrl: './account-my.component.html',
  styleUrls: ['./account-my.component.scss']
})
export class AccountMyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copy() {
    alert('已複製');
  }

}
