import { Component, OnDestroy, OnInit} from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { Chat } from 'src/app/interfaces/Chat';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{

  expanded: boolean = false;
  chats: Chat[]= [];
  chatIsOpen: boolean = false;
  openIndex: number = -999;
  appState: 'loggedOut'|'company'|'developer' = 'loggedOut'
  userInput: string = '';
  totalUnreads: number = 0;
  activeUser = {
    id: '',
    name: '',
    photo_path: '',
  }

  constructor(
    private chatService: ChatService,
    private appStateService: AppStateService
  ) { }

  ngOnInit(): void {
    this.appStateService.activeDeveloper.subscribe((developer) => {
      if (developer !== null) {
        this.activeUser.id = developer.id;
        this.activeUser.name = `${developer.first_name} ${developer.last_name}`;
        this.activeUser.photo_path = developer.photo_path;
      }
    });

    this.appStateService.activeCompany.subscribe((company) => {
      if (company !== null) {
        this.activeUser.id = company.id;
        this.activeUser.name = company.name;
        this.activeUser.photo_path = company.photo_path;
      }
    });

    this.chatService.openTheNewChat.subscribe((openTheNewChat) => {
      if (openTheNewChat >= 0) {
        this.expanded = true;
        this.openIndex = openTheNewChat;
        this.selectChat(this.openIndex);
      }
    });

    this.appStateService.appState.subscribe((state) => {
      this.appState = state
      if (this.appState !== 'loggedOut') {
        this.chatService.signIn(this.appState, this.activeUser.id)
      }
    });

    this.chatService.chats.subscribe((chats) => {
      if (this.chats[this.openIndex]) {
        const activeChat = this.chats[this.openIndex];
        for (let i = 0; i < chats.length; ++i) {
          if (
            activeChat.company.id === chats[i].company.id
            &&
            activeChat.developer.id === chats[i].developer.id
          ) {
            this.openIndex = i;
          }
        }
      }
      this.chats = chats;
      this.totalUnreads = 0;
      chats.forEach((chat) => {
        if (this.appState === 'company') this.totalUnreads += chat.company_unreads;
        else if (this.appState === 'developer') this.totalUnreads += chat.developer_unreads;
      });
      console.log(this.totalUnreads);
    });
  }

  ngOnDestroy() {
    this.chatService.signOut();
    this.chatService.chats.next([]);
  }

  expandChat(): void {
    this.expanded ? this.expanded = false : this.expanded = true;
  }

  selectChat(index: number): void {
    this.openIndex = index;
    this.expanded = false;
    this.chatIsOpen = true;
    if (this.appState === 'developer') {
      this.chatService.readMessages(this.chats[index].company.id)
    } else if (this.appState === 'company') {
      this.chatService.readMessages(this.chats[index].developer.id)
    }
  }

  closeChat(): void {
    this.expanded = true;
    this.chatIsOpen = false;
    if (this.appState === 'developer') {
      this.chatService.readMessages(this.chats[this.openIndex].company.id)
    } else if (this.appState === 'company') {
      this.chatService.readMessages(this.chats[this.openIndex].developer.id)
    }
  }

  sendMessage(message: string): void {
    const id = this.appState === 'company' ?
    this.chats[this.openIndex].developer.id
    : this.chats[this.openIndex].company.id
    this.chatService.sendMessage(message, id);
    this.userInput = '';
    console.log(this.chats)
  }


}
