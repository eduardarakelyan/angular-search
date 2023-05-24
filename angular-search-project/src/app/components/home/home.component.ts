import { Component, OnInit,Input } from '@angular/core';
import { take } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //make sure to remove "any" type. Put actual type
  myData: any
  // myFilteredData:any
  message:string = ''
  // myFilteredData:any
  constructor(private myDataService: MyDataService) {
  }

  //make sure to remove "any" type in res. Put actual type
  ngOnInit() {
    this.myDataService.getData('').pipe(take(1)).subscribe((res:any) => {
      this.myData = res;
      })
  }

  receiveMessage($event:any) {
    this.message = $event
    console.log("in receiveMessage: ",this.message)
    this.myDataService.getData(this.message).pipe(take(1)).subscribe((res:any) => {
      this.myData = res;
      })
  }

  onSearch() {
    // if(this.message) {
    //     this.myDataService.getDataOnInput(this.message).subscribe((res:any) => {
    //     this.myFilteredData = res;
    //   })
    // }else{
    //   this.myDataService.getData().pipe(take(1)).subscribe((res:any) => {
    //   this.myData = res;
    //   })
    // }
    // this.myDataService.getData('').pipe(take(1)).subscribe((res:any) => {
    //   this.myData = res;
    //   })
  }

  // onSearch(val:string) {
  //   // make sure to unsubscribe
  //   if(val) {
  //     this.myDataService.getDataOnInput(val).subscribe((res:any) => {
  //       this.myFilteredData = res;
  //     })
  //     // console.log("my data in this.myData in onSearch: ",this.myData)
  //   }else{
  //     this.myDataService.getData().pipe(take(1)).subscribe((res:any) => {
  //       this.myData = res;
  //     })
  //   }
  // }

}
