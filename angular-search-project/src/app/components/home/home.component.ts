import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //make sure to remove "any" type. Put actual type
  myData: any
  // myFilteredData:any
  message:string = ''
  errorMessage:any
  // myFilteredData:any
  constructor(private myDataService: MyDataService) {
  }

  //make sure to remove "any" type in res. Put actual type
  // ngOnInit() {
  //   this.myDataService.getData('').pipe(take(1)).subscribe((res:any) => {
  //     this.myData = res;
  //     })
  // }

  receiveMessage($event:any) {
    console.log("message: ",$event)
    this.message = $event
    this.myDataService.getData(this.message).pipe(take(1)).subscribe((res:any) => {
      this.myData = res;
      this.errorMessage = ''
      },(error) => {
        console.log(error)
        this.errorMessage = error;
      })
  }


}
