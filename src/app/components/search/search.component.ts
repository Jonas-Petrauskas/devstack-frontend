import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaggedItem } from 'src/app/interfaces/TaggedItem';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString: string = '';

  @Input()
  placeString: string = '';
  @Input()
  allOptions: TaggedItem[] = [];
  filteredOptions: TaggedItem[] = [];
  @Input()
  selectedOptions: TaggedItem[] = [];
  @Output()
  selectOptsEvent = new EventEmitter<TaggedItem[]>();
  @Input()
  isHidden: boolean = false;

  
  constructor() { 
    window.addEventListener('click', ({target}) => {
      if ((target as HTMLElement).title !== 'searchBar') {
        this.search('');
      }
      else return;
    })
  }

  ngOnInit(): void {
  }

  search(query: string): void {
    this.searchString = query.toLowerCase()
    const regex = new RegExp(`^${query}`,'i')
    this.filteredOptions = query.length ? this.allOptions.filter( (option) =>  
      option.name.toLowerCase().includes(this.searchString, 0)
      && !this.selectedOptions.includes(option)
    ) : [];
   
  }

  selectOption(option: TaggedItem): void {
    this.selectedOptions.push(option);
    this.filteredOptions = this.filteredOptions.filter((opt) => opt !== option)
    this.search(this.searchString)
    this.selectOptsEvent.emit(this.selectedOptions);
  }
  
  unSelectOption(option: TaggedItem): void {
    // const index = this.selectedOptions.indexOf(option)
    // this.selectedOptions.splice(index, 1)
    this.selectedOptions = this.selectedOptions.filter((opt) => opt !== option)
    // this.allOptions.push(option)
    this.search(this.searchString)
    this.selectOptsEvent.emit(this.selectedOptions);
  }

  clearSearch(): void {
    if (this.selectedOptions.length) {
      this.searchString = '';
      this.search(''); 
    }
   
   console.log(this.searchString)
  }


}
