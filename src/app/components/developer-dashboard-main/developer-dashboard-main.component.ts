import { Component, OnInit, Input } from '@angular/core';
import { Developer } from 'src/app/interfaces/Developer';
import { ApiClientService } from 'src/app/services/api-client.service';


@Component({
  selector: 'app-developer-dashboard-main',
  templateUrl: './developer-dashboard-main.component.html',
  styleUrls: ['./developer-dashboard-main.component.scss']
})
export class DeveloperDashboardMainComponent implements OnInit {
  
  @Input()
  user?: Developer;
  
  expanded: boolean = false;

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

}
