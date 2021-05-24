import { Component, Input, OnInit } from '@angular/core';
import { Company, defaultCompany } from 'src/app/interfaces/Company';
import { defaultDeveloper, Developer } from 'src/app/interfaces/Developer';
import { defaultMessage, Message } from 'src/app/interfaces/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  message: Message = defaultMessage;
  @Input()
  company: Company = defaultCompany;
  @Input()
  developer: Developer = defaultDeveloper;

  photo:string = '';
  names:string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.message.is_from_developer) {
      this.photo = this.developer.photo_path;
      this.names = `${this.developer.first_name} ${this.developer.last_name}`;
    } else {
      this.photo = this.company.photo_path;
      this.names = this.company.name;
    }
  }

}
