import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData: any;
  constructor(private myDataService: MyDataService) {}

  ngOnInit() {
    this.myDataService.getData().pipe(take(1)).subscribe((res:any) => {
      this.myData = res;
    })
  }

}
