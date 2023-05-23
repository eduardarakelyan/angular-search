import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //make sure to remove "any" type. Put actual type
  myData: any
  myFilteredData:any
  // myFilteredData:any
  constructor(private myDataService: MyDataService) {
  }

  //make sure to remove "any" type in res. Put actual type
  ngOnInit() {
    this.myDataService.getData().pipe(take(1)).subscribe((res:any) => {
      this.myData = res;
    })
  }

  onSearch(val:string) {
    // make sure to unsubscribe
    if(val) {
      this.myDataService.getDataOnInput(val).subscribe((res:any) => {
        this.myFilteredData = res;
      })
      console.log("my data in this.myData in onSearch: ",this.myData)
    }else{
      this.ngOnInit()
    }
  }
}
