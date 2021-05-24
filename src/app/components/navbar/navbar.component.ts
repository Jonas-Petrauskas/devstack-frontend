import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppStateService } from 'src/app/services/app-state.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  state: "loggedOut" | "company" | "developer" = "loggedOut";

  @Input()
  blurBackground: boolean = false;
  mouseIn: boolean = false;

  loginExpanded: boolean = false;
  signupExpanded: boolean = false;

  showCompanyLogin: boolean = false;
  showDeveloperLogin: boolean = false;

  constructor(
    private appState: AppStateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appState.appState.subscribe((state) => this.state = state);
    this.appState.companyLoginShown.subscribe((state) => this.showCompanyLogin = state);
    this.appState.developerLoginShown.subscribe((state) => this.showDeveloperLogin = state);
  }

  mouseenterHandler() { this.mouseIn = true; }
  mouseleaveHandler() { this.mouseIn = false; }

  getLoginOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: '/company/login'},
      {label: 'CANDIDATE', link: '/developer/login'},
    ]
  }

  getSignupOptions(): {label: string, link: string}[] {
    return [
      {label: 'COMPANY', link: '/company/signup'},
      {label: 'CANDIDATE', link: '/developer/signup'},
    ]
  }

  onLoginToggle($event: string): void {
    if (this.loginExpanded) { this.loginExpanded = false; }
    else {
      this.signupExpanded = false;
      this.loginExpanded = true;
    }
  }

  onSignupToggle($event: string): void {
    if (this.signupExpanded) { this.signupExpanded = false; }
    else {
      this.loginExpanded = false;
      this.signupExpanded = true;
    }
  }

  sliderHandler($event: string): void {
    if ($event === '/company/login') this.showCompanyLogin = true;
    if ($event === '/company/signup') this.router.navigate([$event]);
    if ($event === '/developer/login') this.showDeveloperLogin = true;
    if ($event === '/developer/signup') this.router.navigate([$event]);
    this.mouseIn = false;
  }

  hideLogin() { this.appState.hideLogins(); }

}
