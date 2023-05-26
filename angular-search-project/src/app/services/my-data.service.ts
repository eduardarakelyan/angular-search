import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) {}

  getData(param:string) {
    return this.http.get<myDataType>(`https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"${param}"&limit=500`).pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse) {
    return throwError(error.error.error.message);
  }

  // postData() {
  //   const body = {}
  //   return this.http.post('https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"LOTION"&limit=1',body)
  // }
}
