import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) {}

  getData(param:string) {
    return this.http.get(`https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"${param}"&limit=500`).pipe(catchError(this.handleError))
  }

  handleError(error:any) {
    return throwError(error.error.error.message || "Server Error");
  }

  postData() {
    const body = {}
    return this.http.post('https://api.fda.gov/drug/drugsfda.json?search=products.dosage_form:"LOTION"&limit=1',body)
  }
}
