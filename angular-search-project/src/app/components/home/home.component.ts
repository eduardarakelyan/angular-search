import { Component } from '@angular/core';
import { take } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

type applicationDocsType = {
  data:string;
  id:string;
  type:string;
  url:string;
}

type submissionsType = {
  application_docs:applicationDocsType[];
  review_priority?:string;
  submission_class_code?:string;
  submission_class_code_description?:string;
  submission_number?:string;
  submission_status?:string;
  submission_status_date?:string;
  submission_type?:string;
}

type activeIngredientsType = {
  name:string;
  strength:string;
}

type productsType = {
  active_ingredients:activeIngredientsType[];
  brand_name:string;
  dosage_form:string;
  marketing_status:string;
  product_number:string;
  reference_drug:string;
  reference_standard:string;
  route:string;
  te_code:string;
}

type openfdaType = {
  application_number?:string[];
  brand_name?:string[];
  generic_name?:string[];
  manufacturer_name?:string[];
  package_ndc?:string[];
  product_ndc?:string[];
  product_type?:string[];
  route?:string[];
  spl_id?:string[];
  spl_set_id?:string[];
  substance_name:string[];
  unii:string[]
}

type myDataTypeResults = {
  application_number:string;
  openfda: openfdaType;
  products: productsType[];
  sponsor_name : string;
  submissions: submissionsType[];
}

type resultsType = {
  skip:number;
  limit:number;
  total:number;
}

type metaType = {
  disclaimer: string;
  terms:string;
  license:string;
  last_updated:string;
  results: resultsType
}

type myDataType = {
  meta: metaType;
  results:myDataTypeResults[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myData: myDataType | undefined | null
  message:string = ''
  errorMessage:string = ''
  constructor(private myDataService: MyDataService) {
  }

  receiveMessage($event:string) {
    this.message = $event
    this.myDataService.getData(this.message).pipe(take(1)).subscribe((res) => {
      // let filteredArray = res.results.map((v) => v.products.splice(1,1))
      console.log()
      this.myData = res;
      this.errorMessage = ''
      },(error) => {
        console.log(error)
        this.myData = null;
        this.errorMessage = error;
      })
  
  }


}
