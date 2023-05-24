import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  message: string = ''

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

  // onChangeSearch() {
  //   console.log("value entered in input: ",this.inputValue)
  //   this.home.onSearch(this.inputValue);
  // }
}
