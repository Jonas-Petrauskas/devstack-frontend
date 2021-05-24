import { Component, OnInit, Input } from '@angular/core';

import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.scss']
})
export class NavbarLogoutComponent implements OnInit {

  @Input()
  buttonName: string = '';

  constructor(private appState: AppStateService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.appState.logout();
  }

}
