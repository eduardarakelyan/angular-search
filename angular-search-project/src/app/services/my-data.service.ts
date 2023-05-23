import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://api.fda.gov/drug/drugsfda.json?limit=5')
  }

  getDataOnInput(val:string){
    // this.searchInput = val;
    return this.http.get(`https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"${val}"&limit=5`)
  }

  postData() {
    const body = {}
    return this.http.post('https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"LOTION"&limit=1',body)
  }
}
