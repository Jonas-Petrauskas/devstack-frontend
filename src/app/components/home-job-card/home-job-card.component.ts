import { Component, Input, OnInit } from '@angular/core';

import { emptyCard } from './emptyCard';

@Component({
  selector: 'app-home-job-card',
  templateUrl: './home-job-card.component.html',
  styleUrls: ['./home-job-card.component.scss']
})
export class HomeJobCardComponent implements OnInit {

  @Input() cardData = emptyCard;

  constructor() { }

  ngOnInit(): void {
  }

}
