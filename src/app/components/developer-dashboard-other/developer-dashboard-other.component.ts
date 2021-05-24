import { Component, OnInit, Input } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { EducationHistory } from'src/app/interfaces/EducationHistory';
import { EmploymentHistory } from 'src/app/interfaces/EmploymentHistory';

@Component({
  selector: 'app-developer-dashboard-other',
  templateUrl: './developer-dashboard-other.component.html',
  styleUrls: ['./developer-dashboard-other.component.scss']
})
export class DeveloperDashboardOtherComponent implements OnInit {

  @Input()
  educationHistory?: EducationHistory[];
  @Input()
  employmentHistory?: EmploymentHistory[];
    
  constructor(private client: ApiClientService) { }
  
  ngOnInit(): void {
  }

}
