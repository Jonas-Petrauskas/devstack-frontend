import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiClientService } from 'src/app/services/api-client.service';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private appState: AppStateService,
    private apiClientService: ApiClientService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log('in the submit')
    const subscription = this.apiClientService.loginAsCompany(this.username, this.password)
      .subscribe((company) => {
        console.log(company)
        if (company !== null) {
          this.appState.setCompany(company);
          this.appState.hideLogins();
          this.router.navigate(['company/dashboard']);
        }
        else {
          console.log('INVALID CREDENTIALS!');
        }
        subscription.unsubscribe();
      });
  }

  submitOnEnter(event: { keyCode: number }) {
    if (event.keyCode === 13) this.submit();
  }

}
