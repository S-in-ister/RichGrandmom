import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  status: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.status = !this.status;
    console.log(this.status);
  }

}
