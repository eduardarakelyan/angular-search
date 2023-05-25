import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) {}

  getData(param:string) {
    // if(param) {
      return this.http.get(`https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"${param}"&limit=500`)
    // } else {
    //   return this.http.get('https://api.fda.gov/drug/drugsfda.json')
    // }
  }

  postData() {
    const body = {}
    return this.http.post('https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"LOTION"&limit=1',body)
  }
}
