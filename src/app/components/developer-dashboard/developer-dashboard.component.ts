import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { defaultDeveloper, Developer } from 'src/app/interfaces/Developer';

@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.scss']
})
export class DeveloperDashboardComponent implements OnInit {

  user: Developer = defaultDeveloper;

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(): void {
    this.appStateService.activeDeveloper
    .subscribe((developer) => {
      if (developer !== null ) this.user = developer
    });
  }
}
