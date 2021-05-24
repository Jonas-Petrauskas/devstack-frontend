import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiClientService } from 'src/app/services/api-client.service';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-developer-login',
  templateUrl: './developer-login.component.html',
  styleUrls: ['./developer-login.component.scss']
})
export class DeveloperLoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private appState: AppStateService,
    private apiClientService: ApiClientService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const subscription = this.apiClientService.loginAsDeveloper(this.email, this.password)
      .subscribe((developer) => {
        if (developer !== null) {
          this.appState.setDeveloper(developer);
          this.appState.hideLogins();
          this.router.navigate(['developer/dashboard']);
        }
        else {
          console.log('INVALID CREDENTIALS!');
        }
        subscription.unsubscribe();
      });
  }

}
