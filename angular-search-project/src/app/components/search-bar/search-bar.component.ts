import { Component,Output,EventEmitter } from '@angular/core';

type eventType = {
  message:string;
  selectedItem:string;
}


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  message: string = ''
  selectedItem:string = ''
  fields = ['dosage form', 'brand name']  

  @Output() messageEvent = new EventEmitter<eventType>();

  constructor() {
    this.selectedItem = this.fields[0];
  }

  sendMessage(){
    this.messageEvent.emit(
      {message: this.message.trim(), selectedItem:this.selectedItem}
    )
  }

  onChangeItem(e:any){
    this.selectedItem = e.target.value
  }

}
