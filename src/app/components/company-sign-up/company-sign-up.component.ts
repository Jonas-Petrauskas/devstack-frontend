import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.scss']
})
export class CompanySignUpComponent implements OnInit {

  form = { companyName: '', email: '', message: '' };
  renderConfirmation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.form = { companyName: '', email: '', message: '' };
    this.renderConfirmation = true;
  }

  hideConfirmation() {
    this.renderConfirmation = false;
  }
}
