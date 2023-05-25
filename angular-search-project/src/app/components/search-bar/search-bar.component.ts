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
    // use trim to remove white space
    this.messageEvent.emit(this.message.trim())
  }

}
