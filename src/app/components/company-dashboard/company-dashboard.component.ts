import { Component, OnInit } from '@angular/core';

import { ApiClientService } from 'src/app/services/api-client.service';

import { DeveloperType } from 'src/app/interfaces/DeveloperType';
import { Technology } from 'src/app/interfaces/Technology';
import { ExperienceLevel } from 'src/app/interfaces/ExperienceLevel';

import { Developer, defaultDeveloper } from 'src/app/interfaces/Developer';
import { TaggedItem } from 'src/app/interfaces/TaggedItem';
import { ChatService } from 'src/app/services/chat.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { Company, defaultCompany } from 'src/app/interfaces/Company';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  devTypes: DeveloperType[] = [];
  techs: Technology[] = [];
  experienceLevels: ExperienceLevel[] = [];
  sortBy: string = '';

  selectedDevType: DeveloperType = {name: 'name', id: 0};
  selectedTechs: Technology[] = [];
  selectedExp: ExperienceLevel = {name: 'name', id: 0};
  searchQuery: string = '';
  filteredUsers: Developer[] = [];
  selectedSkills: TaggedItem[] = [];
  searchAlertMessage: boolean = false;

  currentCompany: Company = defaultCompany; 


  constructor(
    private client: ApiClientService,
    private chatService: ChatService,
    private appService: AppStateService
    ) { }

  ngOnInit(): void {
    this.getAllFields();
    this.appService.activeCompany.subscribe((state) => {
      if (state !== null) {
        this.currentCompany = state;
      } else {
        this.currentCompany = defaultCompany;
      }
    })
  }

  getAllFields(): void {
    this.client.getDeveloperTypes()
      .subscribe((devTypes) => this.devTypes = devTypes);
    this.client.getExperienceLevels()
      .subscribe((expLvls) => this.experienceLevels = expLvls);
    this.client.getTechnologies()
      .subscribe((techs) => this.techs = techs);
    this.client.getAllDevelopers()
    .subscribe((users) => this.filteredUsers = users);
    
  }

  
  searchUsers():void {
    if (this.selectedDevType.id !== 0 && this.selectedExp.id !== 0) {

      let comaSeperated: string = '';
      this.selectedSkills.forEach((tech) => comaSeperated+= tech.id+',')
      comaSeperated= comaSeperated.substr(0, comaSeperated.length-1);
      this.searchQuery = `technologies=${comaSeperated};developer_type=${this.selectedDevType.id};experience_level=${this.selectedExp.id}`
      
      this.client.getFilteredDevelopers(this.searchQuery)
        .subscribe((users) => {
          this.filteredUsers = users
        })
        this.searchAlertMessage = false;
    } else {
      this.searchAlertMessage = true;
    }

  }
  
  updateSelectedOpts(selectedOptions: TaggedItem[]): void {
    this.selectedSkills = [...selectedOptions]
  }
  updateSelectedType(selectedType: any): void {
    this.selectedDevType = selectedType;
  }
  updateSelectedExperience(selectedExps: any): void {
    this.selectedExp = selectedExps;
  }

  initiateChat(developer: Developer) {
    this.chatService.openNewChat(this.currentCompany, developer);
  }
}
