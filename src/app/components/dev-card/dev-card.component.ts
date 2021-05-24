import { Component, Input, OnInit } from '@angular/core';
import { Company, defaultCompany } from 'src/app/interfaces/Company';

import { Developer, defaultDeveloper } from 'src/app/interfaces/Developer';
import { ApiClientService } from 'src/app/services/api-client.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss']
})

export class DevCardComponent implements OnInit {
  @Input()
  photo: {url: string, id: number} = {url: 'https://ca.slack-edge.com/T0WU5R8NT-U014XEG2PJ4-bb2847571bc1-512', id: 1};
  @Input()
  bio: {desc: string, id: number} = {desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: 1};

  @Input()
  user?: Developer;

  expanded: boolean = false;
  careerExpanded: boolean = false; 
  currentCompany: Company = defaultCompany;

  constructor(
    private client: ApiClientService,
    private chatService: ChatService,
    private appState: AppStateService,
    ) { }

  ngOnInit(): void {
    this.appState.activeCompany.subscribe((state) => {
      if (state !== null) {
        this.currentCompany = state;
      } else {
        this.currentCompany = defaultCompany;
      }
    })
  }

  showExpanded(selectedDrop: string): void {
    if (selectedDrop === 'bio') {
      !this.expanded ? this.expanded = true : this.expanded = false;
    }
    if (selectedDrop === 'career') {
      !this.careerExpanded ? this.careerExpanded = true : this.careerExpanded = false
    }
    console.log(this.user)
  }

  initiateChat(developer: Developer) {
    this.chatService.openNewChat(this.currentCompany, developer);
  }
}
