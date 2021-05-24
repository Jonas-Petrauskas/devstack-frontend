import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent implements OnInit {

  @Input() expanded: boolean = false;
  @Input() blurBackground: boolean = false;
  @Output() toggle: EventEmitter<string> = new EventEmitter();
  @Output() sliderHandler: EventEmitter<string> = new EventEmitter();

  @Input()
  buttonName: string = '';

  @Input()
  dropdownOptions: {label: string, link: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() { this.toggle.emit(this.buttonName); }
  dropdownClickHandler(link: string) {
    this.sliderHandler.emit(link);
    this.clickHandler();
  }
}
