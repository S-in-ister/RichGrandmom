import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-enter-phone',
  templateUrl: './contract-enter-phone.component.html',
  styleUrls: ['./contract-enter-phone.component.scss']
})
export class ContractEnterPhoneComponent implements OnInit {

  formGroup: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      phone: new FormControl(this.formGroup.phone, [
        Validators.required
      ])
    })
  }

  get phoneControl(): FormControl {
    return this.formGroup.get('phone') as FormControl;
  }

  login() {
  }

  test() {
    console.log(this.formGroup.value);
  }
}
