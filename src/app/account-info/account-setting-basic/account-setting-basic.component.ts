import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-setting-basic',
  templateUrl: './account-setting-basic.component.html',
  styleUrls: ['./account-setting-basic.component.scss']
})
export class AccountSettingBasicComponent implements OnInit {

  formGroup: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  change(): void {
    
  }
}
