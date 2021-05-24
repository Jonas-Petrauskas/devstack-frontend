import { Component, OnInit, Input } from '@angular/core';
import { card1, card2, card3 } from './cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  card1 = card1;
  card2 = card2;
  card3 = card3;

  constructor() { }

  ngOnInit(): void {
  }

}
