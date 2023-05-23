import { Component } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public inputValue:string = '';

  constructor(private home : HomeComponent) {}

  onChangeSearch() {
    console.log("value entered in input: ",this.inputValue)
    this.home.onSearch(this.inputValue);
  }
}
