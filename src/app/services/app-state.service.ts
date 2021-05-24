import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Company } from '../interfaces/Company';
import { Developer } from '../interfaces/Developer';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  appState = new BehaviorSubject<'loggedOut'|'company'|'developer'>('loggedOut');
  activeCompany = new BehaviorSubject<Company | null>(null);
  activeDeveloper = new BehaviorSubject<Developer | null>(null);

  companyLoginShown = new BehaviorSubject<boolean>(false);
  developerLoginShown = new BehaviorSubject<boolean>(false);

  constructor() { }

  logout() {
    this.appState.next('loggedOut');
    this.activeCompany.next(null);
    this.activeDeveloper.next(null);
  }

  setCompany(company: Company) {
    this.appState.next('company');
    this.activeCompany.next(company);
  }

  setDeveloper(developer: Developer) {
    this.appState.next('developer');
    this.activeDeveloper.next(developer);
  }

  showCompanyLogin() { this.companyLoginShown.next(true); }
  showDeveloperLogin() { this.developerLoginShown.next(true); }
  hideLogins() {
    this.companyLoginShown.next(false);
    this.developerLoginShown.next(false);
  }

}
