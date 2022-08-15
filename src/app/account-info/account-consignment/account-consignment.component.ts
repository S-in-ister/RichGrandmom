import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-consignment',
  templateUrl: './account-consignment.component.html',
  styleUrls: ['./account-consignment.component.scss']
})
export class AccountConsignmentComponent implements OnInit {

  newQty: any = 0;
  public point = new FormControl(100);

  constructor(
  ) { }

  ngOnInit(): void {
  }

  plus() {
    const qty: any = this.point.value;
    this.newQty = qty + 100;
    this.point.setValue(this.newQty);
  }

  minus() {
    const qty: any = this.point.value;
    this.newQty = qty - 100;
    this.point.setValue(this.newQty);
  }

}
